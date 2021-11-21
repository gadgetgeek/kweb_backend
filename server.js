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
const path = require('path')

// import middleware
const cors = require("cors")
const morgan = require("morgan")
const session = require('express-session')
const MongoStore = require('connect-mongo')

// import controllers
const Auth = require('./controllers/auth')
// const Shop = require('./controllers/shop')
const Shop = require('./controllers/shop')

/////////////////////////////////
//Middleware
//////////////////////////////////
app.use(cors()) // prevent cors errors, opens up access for frontend
app.use(morgan("dev")) //logging
app.use(express.json()) // parse json bodies
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
  resave: false,
  saveUninitialized: true
}))


////////////////////////////////
// Routes
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("kweb is alive")
})

app.use('/user', Auth)

app.use('/shop', Shop)

/////////////////////////////////
// Server Listener
/////////////////////////////////
app.listen(PORT, () => {console.log(`listening on PORT ${PORT}`)})