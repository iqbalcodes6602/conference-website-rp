// backend/routes/users.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require('express');
const Submission = require('../models/Submission'); // Assuming you have a File model
const router = express.Router();
const multer = require('multer');
const path = require('path');


const verifyReviewer = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    jwt.verify(token, 'ipdmis', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token.' });
        }

        // Assuming 'isAdmin' is a field in your user model
        if (decoded.role !== 'reviewer' || decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized.' });
        }

        // Token is valid and user is admin
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



// Route to handle file uploads
router.post('/upload', verifyReviewer, upload.single('file'), async (req, res) => {
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
router.post('/view-assigned-submissions', verifyReviewer, async (req, res) => {
    try {
        const files = await Submission.find({ reviewer: req.user.userId });
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve files.', error: err.message });
    }
});

// Route to serve files
router.post('/view-assigned-submissions/:filename', verifyReviewer, async (req, res) => {
    const file = await Submission.findOne({ filename: req.params.filename, reviewer: req.user.userId });

    if (!file) {
        return res.status(404).json({ message: 'File not found.' });
    }

    const filePath = path.resolve(__dirname, '../uploads', req.params.filename); // Correct path to the root 'uploads' directory
    res.sendFile(filePath);
})



module.exports = router;
