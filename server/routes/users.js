// backend/routes/users.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require('express');
const Submission = require('../models/Submission'); // Assuming you have a File model
const router = express.Router();
const multer = require('multer');
const path = require('path');


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

// user registration route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'Username already exists.' });
        }
        user = new User({ username, password });
        // console.log(user)
        await user.save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// user login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !user.validPassword(password)) {
            // console.log(user);
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        const token = jwt.sign({ userId: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json(token);
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



module.exports = router;
