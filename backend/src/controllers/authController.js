const User = require("../models/User");
const Auth = require("../models/Auth");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
// const CryptoJS = require("crypto-js");
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


    // const hashedPwd = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString()
    const hashedPwd = await bcrypt.hash(password, 10);
    const authDetail = await Auth.create({
        password: hashedPwd,
    });

    let roleDetail;
    switch (role) {
        case "student":
            roleDetail = new Student();
            break;
        case "faculty":
            roleDetail = new Faculty();
            break;
        case "admin":
            roleDetail = new Admin();
            break;
        default:
            throw new Error("Invalid Role");
    }

    await roleDetail.save();
    const userObject = {
        firstName,
        lastName,
        email,
        role,
        roleDetails: roleDetail._id,
        authDetails: authDetail._id,
    };
    const newUser = await User.create(userObject);

    if (newUser) {
        //created
        res.status(201).json({ message: `New user ${email} created` });
    } else {
        res.status(400).json({ message: "Invalid user data received" });
    }
});

// const validPassword = (passwordToCheck, password) => {

//     const hashedPassword = CryptoJS.AES.decrypt(
//         password,
//         process.env.PASSWORD_SECRET
//     );
//     const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
//     if (originalPassword === passwordToCheck) {
//         return true;
//     }

//     return false;

// }

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
        .populate("authDetails")
        .lean()
        .exec();

    if (!user) {
        res.status(401).json("User not found");
    } else {
        // const isMatch = validPassword(password, user.authDetails.password);
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

module.exports = {
    register,
    login,
};

// POST /api/auth/register - Register a new user
// POST /api/auth/login - Authenticate a user and generate a token
// POST /api/auth/logout - Log out the current user
