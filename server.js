//////////////////////////////////
// Dependencies
/////////////////////////////////
// get .env variables
require("dotenv").config()
// pull PORT from .env, give it a default of 3000 (object destructuring)
const {PORT = 3001, DATABASE_URL} = process.env
// import express
const express = require("express")
// create the application object
const app = express()
// import mongoose
const mongoose = require("mongoose")
// import middleware
const cors = require("cors")
const morgan = require("morgan")


/////////////////////////////////
// Database Connection
////////////////////////////////
// establish connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Connection Events
mongoose.connection
.on("open", () => console.log("You are connected to Mongo"))
.on("close", () => console.log("You are disconnected from Mongo"))
.on("error", (error) => console.log(error))

//////////////////////////////
// Models
//////////////////////////////
// the people schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    department: String,
    aisle: String,
    image: String,
    location: String
}, {timestamps: true})

const Products = mongoose.model("Products", ProductSchema)


/////////////////////////////////
//Middleware
//////////////////////////////////
app.use(cors()) // prevent cors errors, opens up access for frontend
app.use(morgan("dev")) //logging
app.use(express.json()) // parse json bodies


////////////////////////////////
// Routes
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("kweb is alive")
})

// index route
app.get("/products", async (req, res) => {
  try {
    // send all products
    res.json(await Products.find({}));
  } catch (error) {
    res.status(400).json({ error });
  }
});


  // create route
  app.post("/products", async (req, res) => {
    try {
      // create a new product
      res.json(await Products.create(req.body));
    } catch (error) {
      res.status(400).json({ error });
    }
  });


  // update  route
  app.put("/products/:id", async (req, res) => {
    try {
        // update a product
        res.json(await Products.findByIdAndUpdate(req.params.id, req.body, {new: true}));
      } catch (error) {
        res.status(400).json({ error });
      }
})  

// Destroy Route 
app.delete("/products/:id", async (req, res) => {
  try {
      // delete a products
      res.json(await Products.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json({ error });
    }
})

  


/////////////////////////////////
// Server Listener
/////////////////////////////////
app.listen(PORT, () => {console.log(`listening on PORT ${PORT}`)})