// models/Submission.js

const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    members: {
        type: Array,
        required: false
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
        enum: ['Pending', 'In Review', 'Reviewed', 'Revision Submitted', 'Rejected', 'Accepted', 'In Verification', 'Registered']
    },
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    },
    review: { // Add review field
        originality: { type: String, required: false },
        relationshipToLiterature: { type: String, required: false },
        methodology: { type: String, required: false },
        recommendation: { type: String, required: false }
    },
    action: {
        type: String,
        required: true,
        default: 'N/A',
        enum: ['N/A', 'Submit Revision', 'Register Now', 'Update Payment Details', 'View Screenshot']
    },
    screenshot: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Submission', SubmissionSchema);
