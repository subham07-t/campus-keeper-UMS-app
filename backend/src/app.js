const express = require("express");
const path = require("path");
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

//middleware functions
app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "..", "/public")));

// routes define
const homeRoute = require("./routes/home");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
app.use("/", homeRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

// Handle 404 errors
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "..", "/src/views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// server listening
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
