const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("They call this the homepage...");
});

app.get("/register", (req, res) => {
  res.send("They call this the register page...");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running fine");
});
