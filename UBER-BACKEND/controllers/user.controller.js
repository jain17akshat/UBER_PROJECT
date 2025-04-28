 const userModel=require('../models/user.model');
const userService=require('../services//user.service');
const {validationResult}=require('express-validator');
const backlistTokenModel=require('../models/blacklistToken.model')


module.exports.registerUser=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors:error.array()});
    }

    const {fullname,email,password}=req.body;

    const hashedPassword=await userModel.hashedPassword(password);
    const user=await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
    })
    
const token=user.generateAuthToken();
res.status(201).json({token,user});
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await userModel.findOne({ email }).select('+password');  // Select password field explicitly

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password with the stored hashed password
    const isMatch = await user.comparePassword(password); // Fix here, use `user.comparePassword` instead of `userModel.comparePassword`

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate auth token
    const token = user.generateAuthToken();
res.cookie('token',token);
    res.status(200).json({ token, user });
};
module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user);
}
module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token');
    const token=req.cookies.token || req.header.authorization.split('')[1];
    res.status(200).json({message:'Logged Out'})
}