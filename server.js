/////////////////////////////////////////////////////////////
// dependicies
/////////////////////////////////////////////////////////////
// get .env variables
require("dotenv").config()
// import express
const express = require("express")
// create the application object
const app = express()
// pull PORT from .env, give it a default of 3000 (object destructuring)
const {PORT = 3000} = process.env
// import middleware
const cors = require("cors")
const morgan = require("morgan")
// import mongoose
const mongoose = require("./db/db")
// add auth router
const AuthRouter = require("./controllers/user")
const auth = require("./auth")

// import config/cors
const corsOptions = require("./config/cors")


/////////////////////////////////////////////////////////////
// Models
/////////////////////////////////////////////////////////////
// the people schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    department: String,
    aisle: String,
    image: String,
    location: String
}, {timestamps: true})

const Products = mongoose.model("Products", ProductSchema)

// make a user schema
// const userSchema = new mongoose.Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true}
// })

// Make the User Model
// const User = mongoose.model("User", userSchema)

/////////////////////////////////////////////////////////////
//Middleware
/////////////////////////////////////////////////////////////
// app.use(NODE_ENV === "production" ? cors(corsOptions) : cors())

app.use(express.json()) // parse json bodies
app.use(cors());
app.use(morgan("tiny")) //logging

app.use(express.static("public")) // just incase you need to serve a static html file for documentation wont really be using it 

/////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////

app.get("/", auth, (req, res) => {
  res.json(req.payload)
})

app.use("/auth", AuthRouter)


// create a test route
// app.get("/", (req, res) => {
//     res.send("kweb is alive")
// })

// index route
// app.get("/products", async (req, res) => {
//   try {
//     // send all products
//     res.json(await Products.find({}));
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });


  // create route
  // app.post("/products", async (req, res) => {
  //   try {
  //     // create a new product
  //     res.json(await Products.create(req.body));
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   } 
  // });


  // update  route
//   app.put("/products/:id", async (req, res) => {
//     try {
//         // update a product
//         res.json(await Products.findByIdAndUpdate(req.params.id, req.body, {new: true}));
//       } catch (error) {
//         res.status(400).json({ error });
//       }
// })  

// Destroy Route 
// app.delete("/products/:id", async (req, res) => {
//   try {
//       // delete a products
//       res.json(await Products.findByIdAndRemove(req.params.id));
//     } catch (error) {
//       res.status(400).json({ error });
//     }
// })

  


/////////////////////////////////////////////////////////////
// Server Listener
/////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})