const express=require("express")
const cors=require("cors")
require("dotenv").config()

const authRoutes=require("./routes/authRoutes")
const taskRoutes=require("./routes/taskRoutes")

const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/tasks",taskRoutes)

app.get("/",(req,res)=>{
 res.send("API Running")
})

app.listen(process.env.PORT,()=>{
 console.log("Server running on port "+process.env.PORT)
})