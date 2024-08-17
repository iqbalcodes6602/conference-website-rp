// backend/routes/users.js

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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

router.get('/all-users', async (req, res) => {
    try {
        const allUsers = await User.find({}).select('-password');
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve all users.', error });
    }
});

// add new submission
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
router.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

// Route to list files
router.get('/files', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) {
            return res.status(500).send('Unable to list files');
        }
        res.json(files);
    });
});

// Route to serve files
router.get('/files/:filename', (req, res) => {
    const filePath = path.resolve(__dirname, '../uploads', req.params.filename); // Correct path to the root 'uploads' directory
    res.sendFile(filePath);
});



module.exports = router;
