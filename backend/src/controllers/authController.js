// const User = require("../models/User");
// const asyncHandler = require("express-async-handler");
// // const bcrypt = require("bcrypt");
// const { generateFromEmail } = require("unique-username-generator");
// // const CryptoJS = require("crypto-js");
// // const jwt = require("jsonwebtoken");

// const register = asyncHandler(async (req, res) => {
//   const { email, password, roles } = req.body;

//   if (!email || !password || !Array.isArray(roles) || !roles.length) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const username = generateFromEmail(email, 3);

//   const isEmailExist = await User.findOne({ email }).lean().exec();
//   if (isEmailExist) {
//     return res.status(409).json({ message: "Email already exist" });
//   }

//   // const hashedPwd = await bcrypt.hash(password, 10);

//   const userObject = { username, email, password: password, roles };
//   const newUser = await User.create(userObject);

//   if (newUser) {
//     //created
//     res.status(201).json({ message: `New user ${email} created` });
//   } else {
//     res.status(400).json({ message: "Invalid user data received" });
//   }
// });

// const login = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).lean().exec();

//   if (!user) {
//     res.status(401).json("User not found");
//   } else {
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (isMatch) {
//       const username = user.username;
//       res.status(200).json({ msg: "success", username });
//     } else {
//       res.status(401).json("Wrong Credentials");
//     }
//   }
// });

// module.exports = {
//   register,
//   login,
// };

// // POST /api/auth/register - Register a new user
// // POST /api/auth/login - Authenticate a user and generate a token
// // POST /api/auth/logout - Log out the current user
