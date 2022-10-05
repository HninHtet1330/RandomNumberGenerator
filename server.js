const express = require('express');
const app = express();
const path = require('path');
app.get("/randomNo",(req,res)=>{
      res.sendFile(path.join(__dirname, 'randomNo.html'));
})
app.get("/learn",(req,res)=>{
      res.sendFile(path.join(__dirname, 'learn.html'));
})
app.listen(3000,()=>{
      console.log("Server is running at localhost:3000");
})