import Auth from "../models/Auth.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import getModelByRole from "../util/model.js";
// const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!firstName || !lastName || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const isEmailExist = await User.findOne({ email }).lean().exec();
  if (isEmailExist) {
    return res.status(409).json({ message: "Email already exist" });
  }

  const hashedPwd = await bcrypt.hash(password, 10);
  const authDetail = await Auth.create({
    password: hashedPwd,
  });

  const userModel = getModelByRole(role);
  let roleDetail = new userModel();

  await roleDetail.save();

  const userObject = {
    firstName,
    lastName,
    email,
    role,
    roleDetails: roleDetail._id,
    authDetails: authDetail,
  };

  if (role === "admin") {
    userObject.isAdmin = true;
  }

  const newUser = await User.create(userObject);

  if (newUser) {
    //created
    res.status(201).json({ message: `New user ${email} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })
    .populate("authDetails")
    .lean()
    .exec();

  if (!user) {
    res.status(401).json("User not found");
  } else {
    const isMatch = await bcrypt.compare(password, user.authDetails.password);

    if (isMatch) {
      const email = user.email;
      res
        .status(200)
        .json({ msg: `success, This ${email} has been logged in` });
    } else {
      res.status(401).json("Wrong Credentials");
    }
  }
});

const authController = {
  register,
  login,
};

export default authController;
// POST /api/auth/register - Register a new user
// POST /api/auth/login - Authenticate a user and generate a token
// POST /api/auth/logout - Log out the current user
