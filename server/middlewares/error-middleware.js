/*
    Improving error handling in our app :-
    when some error occurs in our app at any place it is a better practice to 
    redirect that error to a single file rather than handling it then there and there 
    in the function itself, this way the error handling remains in a single file and
    follows principle like separation fo concerns.
    Express JS has support for handling errors as shown below 
*/

const errorMiddleware = (err, req, res, next) => {
  //All the three variables can take values sent by a particular error, if not they can
  //take the default value as mentioned below.
  const status = err.status | 500;
  const message = err.message | "Backend Error";
  const extraDetails = err.extraDetails | "Something went wrong";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
