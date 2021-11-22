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
    productId: String,
    upc: String,
    aisleLocations: Array,
    brand: String,
    categories: Array,
    countryOrigin: String,
    description: String,
    images: Array,
    items: Array,
    itemInformation: Object,
    temperature: Object
})

// Make the Product Model
const Products = model("Products", ProductSchema)

///////////////////////////////////
// EXPORT
///////////////////////////////////
module.exports = Products