import * as url from "url";
import express from "express";
import path from "path";
import config from "./src/config/config.js";
import cors from "cors";
import connectDB from "./src/config/dbConn.js";
import routes from "./src/routes/index.js";

const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DB connection
connectDB(config.mongoDbUrl);

//middleware functions
app.use(cors(config.corsOptions));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "src/public")));

//api route assign

app.use("/", routes);

// Handle 404 errors
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "src/views", "404.html"));
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
