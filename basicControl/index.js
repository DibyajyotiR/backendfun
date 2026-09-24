require("dotenv").config()
const express=require("express")
const app=express()
// const port=3000
const port=process.env.PORT


app.get("/",(req,res)=>{
    res.send("helooo dibuuu")
})

app.get("/login",(req,res)=>{
    res.send("login in appmodel")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})