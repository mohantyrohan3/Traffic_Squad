const mongoose = require('mongoose');


const AdminDb = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});


const Admin = mongoose.model('Admin',AdminDb);
module.exports = Admin;