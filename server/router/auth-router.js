const express = require("express");

const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");

router.route("/").get(home);

//both the above and below are correct way for routing however the
//below one has a benefit that is we can concatenate multiple methods
//like get,post,etc after the get request whereas in the above we need
//to make a whole different separate routing logic for the post request,etc.

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
