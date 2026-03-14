const taskModel=require("../models/taskModel")

exports.createTask=(req,res)=>{
 const {title,description}=req.body

 taskModel.createTask(
 title,
 description,
 req.user.id,
 (err,result)=>{
   if(err){
     return res.status(500).json(err)
   }

   res.json({message:"Task created"})
 }
 )
}

exports.getTasks=(req,res)=>{
 taskModel.getTasks((err,result)=>{
   if(err){
     return res.status(500).json(err)
   }

   res.json(result)
 })
}

exports.updateTask=(req,res)=>{
 const {title,description}=req.body
 const {id}=req.params

 taskModel.updateTask(id,title,description,(err,result)=>{
   if(err){
     return res.status(500).json(err)
   }

   res.json({message:"Task updated"})
 })
}

exports.deleteTask=(req,res)=>{
 const {id}=req.params

 taskModel.deleteTask(id,(err,result)=>{
   if(err){
     return res.status(500).json(err)
   }

   res.json({message:"Task deleted"})
 })
}