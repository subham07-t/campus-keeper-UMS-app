const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const UserName = req.body.username;
  const Email = req.body.email;
  const Password = req.body.password;

  const newUser = new User({
    username: UserName,
    email: Email,
    password: CryptoJS.AES.encrypt(
      Password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const UserName = req.body.username;
  const Password = req.body.password;

  try {
    const user = await User.findOne({
      username: UserName,
    });

    if (!user) {
      res.status(401).json("Username doesn't exist");
    } else {
      const { password, ...others } = user._doc;

      const hashedPassword = CryptoJS.AES.decrypt(
        password,
        process.env.PASSWORD_SECRET
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      const inputPassword = Password;

      if (originalPassword != inputPassword) {
        res.status(401).json("Wrong Password");
      } else {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_TOKEN_EXPIRES_IN }
        );
        res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
};
