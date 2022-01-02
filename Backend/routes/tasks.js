const router=require('express').Router()
const Todo_model=require('../models/todo')
var mongoose = require('mongoose');
require('dotenv');
var db=mongoose.connect('mongodb://mongo:mongo@'+process.env.IP+':27017/mongodb?directConnection=true&serverSelectionTimeoutMS=2000',function(err,response){
  if(err) 
  console.log("Connection error in database, please try again");
  else
  console.log("Connected Successfully");
})

router.get('/tasks', function(req, res, next){
    Todo_model.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

router.get('/task/:id', function(req, res, next){
    const {_id}=req.params;
    Todo_model.findOne({_id},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

router.post('/task', function(req, res, next){
    const newTodo=new Todo_model({title:req.body.title ,isDone:req.body.isDone})
    newTodo.save()
    .then(()=>{
        console.log("Task is added successfully")
        res.redirect('/')
    })
    .catch(err=>console.log(err))
});

router.delete('/task/:id', function(req, res, next){
    Todo_model.deleteOne({_id:req.params.id})
    .then(()=>{
        console.log("Task is deleted successfully")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
    
    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    
    if(task.title){
        updTask.title = task.title;
    }
    
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        const {_id}=req.params;
        const info=Todo_model.find();
        console.log(info)
        Todo_model.updateOne({_id}, { done:"1"})
        .then(()=>{
            console.log("Task is deleted successfully")
            res.redirect('/')
        })
        .catch((err)=>console.log(err));
    }
});

module.exports = router;
