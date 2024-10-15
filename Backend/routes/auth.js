const express = require('express');
const  router = require('express').Router();
const User = require('../models/User');
const passport = require('../config/passport');
const bcrypt = require('bcrypt');
const selectDatabase = require('../middleware/userRole.js');



router.get('/',(req,res)=>{
    res.send({
        "message":"Welcome to Auth World"
    })
});


router.post('/register',async (req,res)=>{
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