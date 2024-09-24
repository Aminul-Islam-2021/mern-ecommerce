const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const PostRoute = require("./routes/postRoute");
const ProductRoute = require("./routes/productRoute");

// App initialize 
const app = express();

// Invoke and call database
dbConnect()

// Basic middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
  res.status(200).send("Express API is")
})



app.use("/api/post",PostRoute)

app.use("/api/product",ProductRoute);

module.exports=app;