const express = require("express");
const cors = require("cors");

// App initialize 
const app = express();

// Basic middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
  res.status(200).send("Express API is running")
})



module.exports=app;