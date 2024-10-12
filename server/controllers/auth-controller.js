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
    res.send("this reponse is for the homepage using router and controller");
  } catch (err) {
    res.status(500).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    res.send("this is the register page from router and controllers");
  } catch (err) {
    res.status(400).send({ msg: "some error has occured" });
  }
};

module.exports = { home, register };