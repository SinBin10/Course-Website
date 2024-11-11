require("dotenv").config();
const express = require("express");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

app.use(express.json());

//As the number of routes increase in a project the main index.js file
//becomes very cluttered so to make it clean and modular we make
//handling of the response to another file called routers.

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running fine");
  });
});
