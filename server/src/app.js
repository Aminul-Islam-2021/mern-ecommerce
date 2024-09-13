const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const PostRoute = require("./routes/postRoute")
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



app.use("/api/post",PostRoute)


module.exports=app;