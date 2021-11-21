///////////////////////////////////
// IMPORT
///////////////////////////////////
const express = require("express") 
const User = require('../models/user')
const Product = require('../models/product')

///////////////////////////////////
// INITIALIZE ROUTER
///////////////////////////////////
const router = express.Router()

///////////////////////////////////
// CART ROUTES
///////////////////////////////////

/// getCart
router.post('/cart', async (req, res) => {
    User.findById(req.body.id)
        .then((user) => {
            console.log(user.cart)
            res.json(user.cart)
        })
})

/// updateCart
router.put('/cart', async (req, res) => {
    User.findById(req.body.id)
    .then((user) => {
        user.cart = req.body.newCart
        User.findByIdAndUpdate(req.body.id, user, {returnDocument: 'after'})
        .then((user) => {
            console.log(user.cart)
            res.json(user.cart)
        })
    })
})

///////////////////////////////////
// PRODUCT ROUTES
///////////////////////////////////

/// getProduct
router.get('/products', async (req, res) => {
    res.json(await Product.find({}))
})

/// searchProduct
router.post('/products', async (req, res) => {
    res.json(await Product.find(req.body))
})

////////////////////////////////
// export the router
/////////////////////////////////
module.exports = router