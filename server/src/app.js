const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

// App initialize 
const app = express();

// Invoke and call database
dbConnect();


// Basic middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
  res.status(200).send("Express API is running")
})

module.exports=app;