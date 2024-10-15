const express = require('express');
const  router = require('express').Router();
const User = require('../models/User');
const passport = require('../config/passport');
const bcrypt = require('bcrypt');
const selectDatabase = require('../middleware/userRole.js');
const Police = require("../models/PoliceDb.js");
const AdminDB = require("../models/AdminDb.js");
const mailService = require('../middleware/mailService.js');



router.get('/',(req,res)=>{
    res.send({
        "message":"Welcome to Auth World"
    })
});


router.post('/register_admin',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const hashedpassword = await bcrypt.hash(password,10);
        const user = new AdminDB({
            email,
            password:hashedpassword
        });
        await user.save();
        res.send({
            "message":"User Registered Successfully",
            "user":user
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});


router.post('/register_user',async (req,res)=>{
    try{
        const {email,password,dlnumber} = req.body;
        const hashedpassword = await bcrypt.hash(password,10);
        const user = new User({
            email,
            password:hashedpassword,
            dlnumber
        });
        await user.save();
        res.send({
            "message":"User Registered Successfully",
            "user":user
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});


router.post('/register_police',async (req,res)=>{
    
    if(req.isAuthenticated() ==  false  || req.user.usertype != "Admin"){
        return res.status(401).send({
            "message":"Unauthorized Access"

        });
    }
    try{
        const {email,password,jobid,station,name,phoneno,address} = req.body;
        const hashedpassword = await bcrypt.hash(password,10);
        const user = new Police({
            email,
            password:hashedpassword,
            jobid,
            station,
            name:name,
            phoneno,
            address
        });
        await user.save();

        const mailResponse = await mailService(email,password);

        res.send({
            "message":"User Registered Successfully",
            "user":user
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});



router.get('/police_id',async (req,res)=>{
    if(req.isAuthenticated() == false  || req.user.usertype == "User" || req.user.usertype == "Admin"){
        return res.status(401).send({
            "message":"Unauthorized Access"

        });
    }

    try{
        const user = await Police.find({_id : req.user.id});
        res.send({
            "message":"User Details",
            "user":user
        });
    }
    catch(err){
        res.send({
            "message":err.message
        });
    }
});

router.post('/login', selectDatabase,
    passport.authenticate('user', { failureRedirect: '/auth/faillogin' }),
    function(req, res) {
        res.send({
            "message":"Successfully Logged In",
            "user":req.user
        });
});



router.get('/faillogin',(req,res)=>{
    res.status(401).send({
        "message":"Failed to login"
    });
});




router.get('/getAuth',(req,res)=>{
    // console.log(req.isAuthenticated());
    // console.log("Session on /getAuth: ", req.session);
    // console.log(req.user);
    if(req.isAuthenticated()){
        res.send({
            "message":"User is Authenticated",
            "user":req.user
        });
    }
    else{
        res.status(401).send({
            "message":"User is not Authenticated"
        });
    }
})


router.get('/logout',(req,res)=>{
    if(!req.isAuthenticated()){
        res.status(401).send({
            "message":"User is not Authenticated"
        });
        return;
    }
    req.logout((err)=>{
        if(err){
            res.status(401).send({
                "message":"Failed to logout"
                
            });
            return;
        }
       return res.send({
           "message":"Successfully Logged Out"
       });
    });
});


module.exports = router;