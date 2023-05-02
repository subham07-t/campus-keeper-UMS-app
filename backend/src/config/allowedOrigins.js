const developmentOrigins = ["http://localhost:5173"];
const productionOrigins = [
  "http://localhost:5173",
  "https://campus-keeper-frontend.vercel.app",
];

const allowedOrigins = {
  development: developmentOrigins,
  production: productionOrigins,
};

export default allowedOrigins;
