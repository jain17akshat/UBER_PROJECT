const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const userModel = require('../models/user.model');



module.exports.authUser = async (req, res, next) => {
    // Try to get token from cookies or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log("Token received:", token); // Add this line to see if the token is coming in correctly

    // If no token found, return unauthorized
    if (!token) {
        console.log("Token is missing, unauthorized request."); // Log the message
        return res.status(401).json({ message: 'Unauthorized' });
    }
const isBlacklisted=await userModel.findOne({token:token});
if(isBlacklisted){
    return res.status(401).json({message:'Unauthorized'})
}


    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        // Attach the user to the request object
        req.user = user;
        return next();
    } catch (err) {
        // In case of errors, return unauthorized
        console.log("Error verifying token:", err); // Log error
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
