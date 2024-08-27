// backend/models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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
