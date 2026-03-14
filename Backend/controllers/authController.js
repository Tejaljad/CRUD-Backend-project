const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userModel=require("../models/userModel")
require("dotenv").config()

exports.register=(req,res)=>{
 const {name,email,password}=req.body

 bcrypt.hash(password,10,(err,hash)=>{

 userModel.createUser(name,email,hash,(err,result)=>{
   if(err){
     return res.status(500).json({message:"User exists"})
   }

   res.status(201).json({message:"User registered"})
 })

 })
}

exports.login=(req,res)=>{
 const {email,password}=req.body

 userModel.findUserByEmail(email,(err,result)=>{

 if(result.length===0){
   return res.status(404).json({message:"User not found"})
 }

 const user=result[0]

 bcrypt.compare(password,user.password,(err,isMatch)=>{

 if(!isMatch){
   return res.status(401).json({message:"Invalid password"})
 }

 const token=jwt.sign(
   {id:user.id,role:user.role},
   process.env.JWT_SECRET,
   {expiresIn:"1h"}
 )

 res.json({token})

 })

 })
}