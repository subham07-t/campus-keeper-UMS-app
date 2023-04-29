require("dotenv").config();
const allowedOrigins = require("./allowedOrigins");

const development = {
  port: process.env.DEV_PORT,
  corsOptions: {
    origin: (origin, callback) => {
      if (allowedOrigins.development.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  },
  mongoDbUrl: process.env.MONGO_DB_URL,
};

const production = {
  port: process.env.PROD_PORT,
  corsOptions: {
    origin: (origin, callback) => {
      if (allowedOrigins.production.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  },
  mongoDbUrl: process.env.MONGO_DB_URL,
};

const config = { development, production };

module.exports = config[process.env.NODE_ENV];
