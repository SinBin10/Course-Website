const express = require("express");
const router = require("./router/auth-router");

const app = express();

//As the number of routes increase in a project the main index.js file
//becomes very cluttered so to make it clean and modular we make
//handling of the response to another file called routers.

app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running fine");
});