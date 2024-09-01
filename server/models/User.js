// backend/models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: false },
    username: { type: String, required: false },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'reviewer']
    },
});

UserSchema.methods.validPassword = function (password) {
    return password === this.password;
};

UserSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('User', UserSchema);
