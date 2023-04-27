const express = require("express");
const app = express();
const cors = require("cors");

// .env file configuration
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoDbUrl = process.env.MONGO_DB_URL;

// DB connection
const connectDB = require("./db/connect");
connectDB(mongoDbUrl)
  .then(() => console.log("DB connect successfully"))
  .catch((error) => console.log(error));

// routes define
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");

//middleware functions
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/user", userRoute);

// server listening
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
