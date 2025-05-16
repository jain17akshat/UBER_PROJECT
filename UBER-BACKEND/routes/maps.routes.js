const express=require('express')
const router=express.Router();
const authMiddleware=require('../middlewares/authMiddleware')
const {getCoordinates}=require('../controllers/')
router.get('/get-coordinate',async)