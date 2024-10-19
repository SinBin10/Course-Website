const User = require("../models/user-model");

/*so basically things go like this 
in the main Server.js file the router are defined using router as a middleware 
it defines which route to go based on the url and what action is performed when 
you go to a route is defined by the controllers.

This is known as the MVC architecture 
M - Model
V - View
C - Controllers

you see that the functions are async with a try catch block this is because
controllers are where all the logic like fetching data from an API or sending 
requests to a database are written so if the error is not handled properly then 
the server might crash so we need to handle the errors properly*/

const home = async (req, res) => {
  try {
    res.send("home page working fine..");
  } catch (err) {
    res.status(500).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ msg: "user already exists" });
    }
    const createdUser = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).send({
      msg: "registeration successful",
      token: await createdUser.generateToken(),
      userId: createdUser._id.toString(),
    });
  } catch (err) {
    res.status(400).send({ msg: "some error has occured" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    return res.status(400).send({ msg: "Invalid credential" });
  }
  const check = await userExists.checkPassword(password);
  if (check) {
    res.status(200).send({
      msg: "user logged in",
      token: await userExists.generateToken(),
      userId: userExists._id.toString(),
    });
  } else {
    res.status(401).send({ msg: "Invalid credential" });
  }
};

module.exports = { home, register, login };
