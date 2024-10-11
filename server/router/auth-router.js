const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("this response is from router");
});

router.route("/register").get((req, res) => {
  res.send("routing using router.route");
});

module.exports = router;
