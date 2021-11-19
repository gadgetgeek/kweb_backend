///////////////////////////////////////////////////////////
// dependicies
///////////////////////////////////////////////////////////
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
const ProductRouter = require("./controllers/Product")
const auth = require("./auth")

///////////////////////////////////////////////////////////
//Middleware
///////////////////////////////////////////////////////////
app.use(express.json()) // parse json bodies
app.use(cors());
app.use(morgan("tiny")) //logging

app.use(express.static("public")) // just incase you need to serve a static html file for documentation wont really be using it 

///////////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////////
app.get("/", auth, (req, res) => {
  res.json(req.payload)
})

app.use("/auth", AuthRouter)

app.use("/products", ProductRouter);

///////////////////////////////////////////////////////////
// Server Listener
///////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})