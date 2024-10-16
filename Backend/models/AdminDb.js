import mongoose from 'mongoose';


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
export default Admin;