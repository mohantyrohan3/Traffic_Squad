import mongoose from 'mongoose';


const VehicleDB = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    vehicle_no:{
        type:String,
        required:true
    },
    owner_name:{
        type:String,
        required:true
    },
});


const Vehicle = mongoose.model('Vehicle',VehicleDB);
export default Vehicle;