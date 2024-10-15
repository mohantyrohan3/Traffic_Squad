const mongoose = require('mongoose');


const PoliceDB = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    jobid:{
        type:String,
        required:true
    },
    station:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});


const Police = mongoose.model('Police',PoliceDB);
module.exports = Police;