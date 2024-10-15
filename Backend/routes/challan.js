const router = require('express').Router();
const Challan = require('../models/Challan');
const User = require('../models/User');


router.get('/',(req,res)=>{
    res.send({
        "message":"Welcome to Challan World"
    })
});



router.post('/register_challan',async (req,res)=>{
    if(!req.isAuthenticated()  && req.usertype != "Police"){
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
    const dl_params = req.query.dl_no;
    if(!req.isAuthenticated()){
        return res.status(401).send({
            "message":"Unauthorized Access"
        });
    }
    try{
        if(dl_params){
            const challan = await Challan.find({}).populate('police_id').populate({path:'user_id',match:{dlnumber:dl_params}});
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


module.exports = router;