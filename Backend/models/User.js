const mongoose = require('mongoose');


const UserDb = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    dlnumber:{
        type:String,
        required:true,
        unique:true
    }
});


const User = mongoose.model('User',UserDb);
module.exports = User;