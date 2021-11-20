///////////////////////////////////
// IMPORT
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

///////////////////////////////////
// MODEL
///////////////////////////////////
// destructuring Schema and model from mongoose
const {Schema, model} = mongoose 

// Make a User Schema
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: Array
})

// Make the User Model
const User = model("User", userSchema)

///////////////////////////////////
// EXPORT
///////////////////////////////////
module.exports = User