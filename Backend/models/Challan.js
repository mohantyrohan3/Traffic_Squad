const mongoose = require('mongoose');


const ChallanDB = new mongoose.Schema({
    police_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Police',
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    vehicle_no:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        // required:true
    }
});


const Challan = mongoose.model('Challan',ChallanDB);
module.exports = Challan;