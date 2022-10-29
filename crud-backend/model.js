const mongoose=require('mongoose')
const todoSchema= new mongoose.Schema({

title:{
    type:String,
    unique: true,
    required:true
},
description:{
    type:String,
    required:true
}
})
const todoModel=new mongoose.model('todoModel',todoSchema)
module.exports  =todoModel