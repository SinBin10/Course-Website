const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect
      //you can write the name of the database in between the forward slash and question mark
      ();
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connected failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
