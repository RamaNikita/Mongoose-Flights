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
app.get("/", async (req, res) => {
  try {
    const foundFlight = await Flight.find({});
    res.status(200).render("Index", { flights: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});
//New
app.get("/new", (req, res) => {
  res.render("New");
});
//Delete

//Update

//Create
app.post("/", async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    console.log(newFlight);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});
//Show
app.get("/:id", async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id).populate(
      "destinations"
    );
    res.render("Show", {
      flight: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
