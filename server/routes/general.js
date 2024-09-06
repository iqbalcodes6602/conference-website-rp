// backend/routes/general.js

const express = require('express');
const Announcement = require('../models/Announcement');
const router = express.Router();

require('dotenv').config();


// Route to get all announcements
router.get('/get-all-announcements', async (req, res) => {
    try {
        const allAnnouncements = await Announcement.find({});
        res.status(200).json(allAnnouncements);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve announcements.', error: err.message });
    }
});


module.exports = router;
