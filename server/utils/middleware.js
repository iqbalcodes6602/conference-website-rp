// middlewares to verify token and check role of user
const jwt = require('jsonwebtoken');


// user verification
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


// Middleware to check if the user is an admin
const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    jwt.verify(token, 'ipdims', (err, decoded) => {
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


// reviewer verification
const verifyReviewer = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    jwt.verify(token, 'ipdims', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token.' });
        }

        // Assuming 'isAdmin' is a field in your user model
        if (decoded.role !== 'reviewer') {
            return res.status(403).json({ message: 'Not authorized.' });
        }

        // Token is valid and user is admin
        req.user = decoded;
        next();
    });
};


module.exports = { verifyToken, verifyAdmin, verifyReviewer };