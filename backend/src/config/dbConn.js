const mongoose = require("mongoose");

// Connect to the MongoDB database
const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log(err);
  }
};

// Log a success message when the connection is opened
mongoose.connection.once("open", () => {
  console.log("DB connect successfully");
});

module.exports = connectDB;
