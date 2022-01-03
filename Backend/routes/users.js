var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/User');
//var app = express();
require('dotenv');
var db=mongoose.connect('mongodb://mongo:mongo@'+process.env.IP+':27017/mongodb?directConnection=true&serverSelectionTimeoutMS=2000',function(err,response){
  if(err) 
    console.log("Connection error in database, please try again");
  else
    console.log("Connected Successfully");
})

router.get('/users', function(req, res, next){
    User.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

router.get('/user/:id', function(req, res, next){
    const {_id}=req.params;
    User.findOne({_id}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});
//register
router.post('/user', function(req, res, next){
    var firstname= req.body.firstname;
    var lastname= req.body.lastname;
    var email= req.body.email;
    var password= req.body.password;

    var user = new User();
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.password=password;
    console.log(user);
    user.save((err,result)=>{
        if(err){
            console.log("Connection error in database, please try again");
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});
//login
router.post('/userlogin', function(req, res, next){
    var firstname= req.body.firstname;
    var password= req.body.password;
    User.findOne({firstname:firstname,password:password},function(err,user){
        if(err){
            console.log("Connection error in database, please try again");
            res.sendStatus(500);
        }
        if(!user){
            return res.status(404).send();
        }
        return res.status(200).send();
    })
});

router.delete('/user/:id', function(req, res, next){
    const {_id}=req.params;
    User.remove({_id}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});

router.put('/user/:id', function(req, res, next){
    var user = req.body;
    var updUser = {};
    
    if(user.isDone){
        updUser.isDone = user.isDone;
    }
    
    if(user.title){
        updUser.title = user.title;
    }
    
    if(!updUser){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        User.update({_id},updUser, {}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
    }
});

module.exports = router;
