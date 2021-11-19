// const User = require("../models/user");
const Products = require("../models/model")
const auth = require("../auth")
const { Router } = require("express");
const router = Router();

// index route
router.get("/", auth, async (req, res) => {
    try {
        const {username} = req.payload
        res.status(200).json(await Products.find({username}))
    }
    catch(error){
        res.status(400).json({error})
    }
})

// create route
router.post("/", auth, async (req, res) => {
    try {
        const {username} = req.payload
        req.body.username = username
        res.status(200).json(await Products.create(req.body))
    }
    catch(error){
        res.status(400).json({error})
    }
})

// update route
router.put("/:id", auth, async (req, res) => {
    try {
        const {username} = req.payload
        req.body.username = username
        const {id} = req.params
        res.status(200).json(await Products.findByIdAndUpdate(id, req.body, {new: true}))
    }
    catch(error){
        res.status(400).json({error})
    }
})

// delete route
router.delete("/:id", auth, async (req, res) => {
    try {
        const {id} = req.params;
        res.status(200).json(await Products.findByIdAndRemove(id, req.body))
    }
    catch(error){
        res.status(400).json({error})
    }
})

module.exports = router;