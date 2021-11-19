require("dotenv").config();
const {SECRET} = process.env
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    // Authorization: "bearer jshfdfsdhdslks"

    // checks to see if auth header is in there
    if (req.headers.authorization) {
      // pull out the token
      const token = req.headers.authorization.split(" ")[1];
      // verify the token
      const payload = await jwt.verify(token, SECRET);
      if (payload) {
        // pass payload into request object
        req.payload = payload;
        next();
      } else {
        res.status(400).json({ error: "VERIFICATION FAILED OR NO PAYLOAD" });
      }
    } else {
      res.status(400).json({ error: "NO AUTHORIZATION HEADER" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
module.exports = auth;
