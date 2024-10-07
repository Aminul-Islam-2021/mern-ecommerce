const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const PostRoute = require("./routes/postRoute");
const ProductRoute = require("./routes/productRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// App initialize
const app = express();

// Invoke and call database
dbConnect();

// Basic middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Express API is");
});

app.use("/api/post", PostRoute);
app.use("/api/product", ProductRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
