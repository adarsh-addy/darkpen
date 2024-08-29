const express= require('express');
 const app=express();
 
 

 app.use(express.static("./"))

 app.get("/",(req,res)=>{
    res.sendFile("index.html")
 })



//  const mnRouter=require('./backend')
//  app.use('/backend',mnRouter);

 const port =process.env.PORT||4000;
app.get("/test",(req,res)=>{
    res.send("Server is running");
})


app.use("*",(req,res,next)=>{
    res.status(404).send("Page not found")
})
 app.listen(port,()=>{
    console.log("server is running on port 4000");
 })