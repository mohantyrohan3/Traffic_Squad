import express from 'express';
const router = express.Router();
import Challan from '../models/Challan.js';
import User from '../models/User.js';
import multer from 'multer';
import app from '../config/firebase.js';
import {getStorage,ref,uploadBytes,getDownloadURL , uploadBytesResumable} from 'firebase/storage';
import Vehicle from '../models/Vehicle.js';


const storage = getStorage();
const mstorage = multer.memoryStorage();
const upload = multer({ storage: mstorage });



router.get('/',(req,res)=>{
    res.send({
        "message":"Welcome to Challan World"
    })
});



router.post('/register_challan',upload.single('file'), async (req,res)=>{
    
    if(req.isAuthenticated() == false  ||  req.user.usertype != "Police"){
        return res.status(401).send({
            "message":"Unauthorized Access"

    });
    }
    try{
        const {vehicle_no , dl_no} = req.body;
        const user = await User.findOne({dlnumber:dl_no});
        if(!user){
           return res.status(400).send({
                "message":"User Not Found"
              });
        }

        
        const challan = new Challan({
            police_id:req.user.id,
            user_id:user._id,
            vehicle_no,
        });
        
        const storageRef = ref(storage, `challan/${user._id}/${challan._id}/${req.file.originalname}`);
        const metadata = {
            contentType: req.file.mimetype,
        };

        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);

        challan.image.push(downloadURL);
        await challan.save();

        res.send({
            "message":"Challan Registered Successfully",
            "challan":challan
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});





router.get('/get_challan',async (req,res)=>{
    const id = req.query.id;
    const police_id = req.query.police_id;
    if(req.isAuthenticated() == false){
        return res.status(401).send({
            "message":"Unauthorized Access"
        });
    }
    try{
        if(id){
            const challan = await Challan.find({}).populate('police_id').populate({path:'user_id',match:{_id: id}});
            const response = {
                challan:[]
            };
            for(let i=0; i < challan.length ; i++){
                if(challan[i].user_id != null){
                    response['challan'].push(challan[i]);
                }
            }

            return res.send({
                "message":"Challan Details",
                "challan":response.challan
            });
        }
        if(police_id){
            const challan = await Challan.find().populate({path:'police_id',match:{_id:police_id}}).populate('user_id');
            return res.send({
                "message":"Challan Details",
                "challan":challan
            });
        }
        const challan = await Challan.find({}).populate('police_id').populate('user_id');
        res.send({
            "message":"Challan Details",
            "challan":challan
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});



router.post('/add_vehicle' , async (req,res)=>{
    if(req.isAuthenticated() == false || req.user.usertype != "User"){
        return res.status(401).send({
            "message":"Unauthorized Access"
        });
    }


    const {vehicle_no , owner_name} = req.body;

    try{
        const vehicle = new Vehicle({
            user_id:req.user.id,
            vehicle_no,
            owner_name
        });

        await vehicle.save();

        res.send({
            "message":"Vehicle Added Successfully",
            "vehicle":vehicle
        });
    }

    catch(err){
        res.send({
            "message":err.message
        });
    }
})


router.get('/get_vehicle',async (req,res)=>{
    if(req.isAuthenticated() == false || req.user.usertype != "User"){
        return res.status(401).send({
            "message":"Unauthorized Access"
        });
    }

    try{
        const vehicle = await Vehicle.find({user_id:req.user.id});
        res.send({
            "message":"Vehicle Details",
            "vehicle":vehicle
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});


export default router;