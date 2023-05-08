require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require("./models/flight");
const { connect, connection } = require("mongoose");

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to Mongo");
});
//View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//Custom Middleware
app.use((req, res, next) => {
  console.log("Middleware Running...");
  next();
});

//Routes

//Index
app.get("/", (req, res) => {
  res.render("Index");
});
//New
app.get("/new", (req, res) => {
  res.render("New");
});
//Delete

//Update

//Create

//Show
app.get("/:id", (req, res) => {
  res.render("Show");
});
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
