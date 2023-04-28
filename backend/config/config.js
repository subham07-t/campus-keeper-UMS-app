require("dotenv").config();
const allowedOrigins = require("./allowedOrigins");

const config = {
  development: {
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
    mongoDbUrl: process.env.DEV_DB_URL,
  },
  production: {
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
    mongoDbUrl: process.env.PROD_DB_URL,
  },
};

let nodeEnv = process.env.NODE_ENV;
console.log(nodeEnv);

module.exports = config[nodeEnv];
