const express = require("express");

const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(home);

//both the above and below are correct way for routing however the
//below one has a benefit that is we can concatenate multiple methods
//like get,post,etc after the get request whereas in the above we need
//to make a whole different separate routing logic for the post request,etc.

router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

module.exports = router;
