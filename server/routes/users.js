// backend/routes/users.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require('express');
const Submission = require('../models/Submission'); // Assuming you have a File model
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const multer = require('multer');
require('dotenv').config();

// Temporary store for unverified users and their OTPs
const tempStore = {};

// Set up nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL, // Your email
        pass: process.env.SENDER_EMAIL_PASSWORD, // Your email password
    },
});

// Generate OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString(); // 6-digit OTP
};

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token.' });
        }

        req.user = decoded; // Attach user information to request object
        next();
    });
};


// Set up Multer storage options
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Destination folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Filename with timestamp
    }
});
const upload = multer({ storage });


// User registration route
router.post('/register', async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Generate and store OTP
        const otp = generateOTP();
        console.log(otp)

        // Store user data and OTP in the temporary store
        tempStore[email] = { fullName, email, password, otp };

        // Send OTP to user's email
        await transporter.sendMail({
            to: email,
            subject: 'Verify your email',
            text: `Your OTP for verification is ${otp}`,
        });

        return res.status(200).json({ message: 'OTP sent to your email.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// Verify OTP route
router.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;
    try {
        // Check if the email exists in the temp store
        const tempUser = tempStore[email];
        if (!tempUser) {
            return res.status(400).json({ message: 'User not found or already verified.' });
        }

        // Verify OTP
        if (tempUser.otp === otp) {
            // Save the user to the database
            const user = new User({
                fullName: tempUser.fullName,
                email: tempUser.email,
                password: tempUser.password,
            });
            await user.save();

            // Remove temp user data from the store
            delete tempStore[email];

            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id, fullName: user.fullName, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            return res.status(200).json({ message: 'Email verified successfully.', token });
        } else {
            return res.status(400).json({ message: 'Invalid OTP.' });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error.' });
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !user.validPassword(password)) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        const token = jwt.sign(
            { userId: user._id, fullName: user.fullName, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});



// Route to get all users
router.get('/all-users', async (req, res) => {
    try {
        const allUsers = await User.find({}).select('-password');
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve all users.', error });
    }
});


// Route to handle file uploads
router.post('/upload', verifyToken, upload.single('file'), async (req, res) => {
    const { filename } = req.file;
    const { name, email, members } = req.body;

    const submission = new Submission({
        filename,
        userId: req.user.userId,
        name,      // Add name field
        email,     // Add email field
        members: JSON.parse(members) // Parse members back to object
    });

    try {
        await submission.save();
        res.status(201).json({ message: 'File uploaded successfully', submission });
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});

// Route to list files
router.post('/view-my-submissions', verifyToken, async (req, res) => {
    try {
        const files = await Submission.find({ userId: req.user.userId });
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve files.', error: err.message });
    }
});


// Route to serve files
router.post('/view-my-submissions/:filename', verifyToken, async (req, res) => {
    const file = await Submission.findOne({ filename: req.params.filename, userId: req.user.userId });

    if (!file) {
        return res.status(404).json({ message: 'File not found.' });
    }

    const filePath = path.resolve(__dirname, '../uploads', req.params.filename); // Correct path to the root 'uploads' directory
    res.sendFile(filePath);
})


// Route to submit revision
router.post('/submit-revision', verifyToken, upload.single('file'), async (req, res) => {
    const { filename } = req.file;
    const { submissionId } = req.body;

    try {
        const submission = await Submission.findById(submissionId);
        if (!submission) {
            return res.status(404).json({ message: 'Submission not found' });
        }

        submission.filename = filename;
        submission.status = 'Revision Submitted';
        submission.action = 'N/A';

        await submission.save();

        res.status(201).json({ message: 'Revision Submitted Successfully', submission });
    } catch (err) {
        // Handle errors and send error response
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});


// register for confrernece
router.post('/register-now', verifyToken, upload.single('file'), async (req, res) => {
    const { filename } = req.file;
    const { submissionId } = req.body;

    try {
        const submission = await Submission.findById(submissionId);
        if (!submission) {
            return res.status(404).json({ message: 'Submission not found' });
        }

        submission.screenshot = filename;
        submission.status = 'In Verification';
        submission.action = 'View Screenshot';

        await submission.save();

        res.status(201).json({ message: 'Revision Submitted Successfully', submission });
    } catch (err) {
        // Handle errors and send error response
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});



// Route to serve submission screenshot
router.post('/view-submission-screenshot/:filename', verifyToken, async (req, res) => {
    try {
        const { submissionId } = req.body;
        const file = await Submission.findOne({ _id: submissionId, screenshot: req.params.filename });

        if (!file) {
            return res.status(404).json({ message: 'Screenshot not found.' });
        }

        const filePath = path.resolve(__dirname, '../uploads', req.params.filename); // Correct path to the root 'uploads' directory
        res.sendFile(filePath);
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
});


module.exports = router;
