const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

/*bcryptjs can be used for hashing the password of the user so that
people who have access to the database cannot read the users password
it can be implemented in the main index.js file using only 2 lines however 
in mern stack or general development you are not the only one making a project
so rules separation of concerns and dont repeat yourself should be followed
hashing a password kind of relates to the schema and database so the password 
is hashed in the usermodel file itself in main index.js file only contains logic 
for creating the user in the database. You can use pre method in mongo db
(functions inside pre method act like a middleware).*/

userSchema.pre("save", async function (next) {
  const user = this;
  //only hash the password if it updates or user is created the first time
  //if you dont do this password will rehashed even if user has only changed
  //the username and if the hash changes user wont be able to login again
  if (user.isModified("password") === false) return next();
  const saltRounds = 10;
  const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
  user.password = hashedPassword;
  next();
});

//why jsonwebtokens in this model file like hashing logic  ?
//as it is related to authorization like hashing

//the method below generates a function called generateToken for
//the schema and is accessible for individual documents
userSchema.methods.generateToken = async function () {
  return jwt.sign(
    { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "30d" }
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
