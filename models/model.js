const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    username: { type: String, required: true },
    name: String,
    price: String,
    department: String,
    aisle: String,
    image: String,
    location: String,
  },
  { timestamps: true }
);

const Products = model("Products", ProductSchema);

module.exports = Products;
