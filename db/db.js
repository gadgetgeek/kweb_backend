require("dotenv").config()
const mongoose = require("mongoose")
// prevents deprecation warnings from happening
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {MONGODBURI} = process.env

//////////////////////////////////////////
// Create Connection
//////////////////////////////////////////
mongoose.connect(MONGODBURI, config)

//////////////////////////////////////////
// DB EVENTS
//////////////////////////////////////////
mongoose.connection
.on("open", () => console.log("You are Connected to Mongo"))
.on("close", () => console.log("You are Disconnected to Mongo"))
.on("error", (error) => console.log(error))

module.exports = mongoose