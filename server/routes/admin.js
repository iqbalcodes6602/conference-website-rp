const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Middleware to check if the user is an admin
const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    jwt.verify(token, 'ipdmis', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token.' });
        }

        // Assuming 'isAdmin' is a field in your user model
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized.' });
        }

        // Token is valid and user is admin
        next();
    });
};

// Admin users route
router.get('/all-users', verifyAdmin, async (req, res) => {
    try {
        // console.log('Admin user route hit');
        const allUsers = await User.find({}).select('-password');
        res.status(200).json(allUsers);
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).json({ message: 'Failed to retrieve all users.', error });
    }
});

module.exports = router;
