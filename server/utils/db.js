const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    //you can write the name of the database in between the forward slash and question mark    );
    await mongoose.connect(URI);
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connected failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
