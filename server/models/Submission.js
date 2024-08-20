const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: false },
    email: { type: String, required: false },
    members: { type: Array, required: false },
    reviewer: { type: String, required: false },
    // reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false, default: null },
});

module.exports = mongoose.model('Submission', SubmissionSchema);