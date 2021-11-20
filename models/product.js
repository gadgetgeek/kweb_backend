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

// Make a Product Schema
const ProductSchema = new Schema({
    name: String,
    price: String,
    department: String,
    aisle: String,
    image: String,
    location: String
})

// Make the Product Model
const Products = model("Products", ProductSchema)

///////////////////////////////////
// EXPORT
///////////////////////////////////
module.exports = Products