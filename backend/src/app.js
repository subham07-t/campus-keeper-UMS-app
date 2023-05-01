const express = require("express");
const path = require("path");
const cors = require("cors");
const config = require("./config/config");
const connectDB = require("./config/dbConn");

const app = express();

// DB connection
connectDB(config.mongoDbUrl);

//middleware functions
app.use(cors(config.corsOptions));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "/public")));
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
    res.sendFile(path.join(__dirname, "/views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});
// server listening
app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
