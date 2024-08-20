const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: false },
    email: { type: String, required: false },
    members: { type: Array, required: false } // Adjust the type based on how you want to store members
});

module.exports = mongoose.model('Submission', SubmissionSchema);
