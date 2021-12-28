const mongoose=require('mongoose');
const Todoschema=new mongoose.Schema({
    //firstname :{type:String, required:true},
    title:{type:String,required:true},
    isDone:{type:Boolean}

});

module.exports=new mongoose.model("Todo",Todoschema);