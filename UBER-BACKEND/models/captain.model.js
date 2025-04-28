const mongoose=require("mongoose");
const jwt =require('jsonwebtoken');
const bcrypt=require('bcrypt');

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
        type:String,
        required:true,
        minlength:[3,'First name must be at least 3 characters long'],
        

        lastname:{
            type:String,
            required:true,
            minlength:[3,'Last  name must be at least 3 characters long'],
            
        
        }
    
    }
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    email:{
        type:String,
        required:true,
        unique: true,

    },

    socketId:{
        types:String,

    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehichle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be of 3 chanracter long']
        },

        plate:{
            type:String,
            required:true,
            minglength:[3,'plate numeber must be of 3 chanracter long']
        
        },

        capacity:{
            type:Number,
            required:true,
            minglength:[1,'capacity must be of 1 passenger'],

        },
    },
    vehicleType:{
        type:String,
        required:true,
        enum:['auto','car','motorcycle'],
    },

location:{
    lat:{
        type:Number,

    },
    lng:{
        type:Number,
    },
}

})
captainSchema.methods.generateAuthToken=function(){
const token= jwt.sign({_id:this._id},process.env._JWT_SECRET,{expiresIn:'24h'})
return token;
}
captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
const captainModel=mongoose.model('captain',captainSchema)
module.exports=captainModel;