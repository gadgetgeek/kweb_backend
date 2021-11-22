//////////////////////////////
// Import Dependencies
//////////////////////////////
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

///////////////////////////////
// Create Router
///////////////////////////////
const router = express.Router()

////////////////////////////
// ROUTES
////////////////////////////

// The Signup Routes (Get => Form, Post => form submit)
// "/user/signup"
router.post("/signup", async (req, res) => {
  // encrypt password
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  )
  
  // save the user to our database
  User.create(req.body)
    .then((user) => {
      // log the user as a test
      console.log(user)
      res.json(user)
    })
    .catch((error) => {
      // error handling
      console.log(error)
      res.json(error)
    })
})

// The login Routes (Get => Form, Post => form submit)
// "/user/login"
router.post("/login", async (req, res) => {
  // destructure username and password from req.body
  const { username, password } = req.body

  // search for the user
  User.findOne({ username })
    .then(async (user) => {
      // check if the user exists
      if (user) {
        // compare passwords
        const result = await bcrypt.compare(password, user.password)
        if (result) {
          // send user info
          console.log(user)
          res.json(user)
        } else {
          // send error of wrong password
          res.json({ error: "password doesn't match" })
        }
      } else {
        //send error that user doesn't exist
        res.json({ error: "user doesn't exist" })
      }
    })
    // error handling
    .catch((error) => {
      res.json({ error })
    })
})

////////////////////////////////
// export the router
/////////////////////////////////
module.exports = router