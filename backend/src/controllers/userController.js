import User from "../models/User.js";
import Student from "../models/Student.js";
import Faculty from "../models/Faculty.js";
import Admin from "../models/Admin.js";
import asyncHandler from "express-async-handler";

const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB but don't return password
  const users = await User.find().select("-password").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();

  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(user);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updateDetails = req.body;

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (
    !(user.role === "admin") &&
    "isAdmin" in updateDetails &&
    updateDetails.isAdmin === true
  ) {
    res.json({ message: `Can't update isAdmin Status for this user` });
  }

  const updatedUser = await User.findByIdAndUpdate(id, updateDetails, {
    new: true,
  });

  if (updatedUser) {
    res.json({ message: `${updatedUser.email} updated` });
  } else {
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "User ID Required" });
  }

  // Does the user exist to delete?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  const reply = `Username ${result.email} with ID ${result._id} deleted`;

  res.json(reply);
});

const addRoleDetail = asyncHandler(async (req, res) => {
  const { role, id } = req.params;
  const additionalDetails = req.body;
  const user = await User.findOne({ roleDetails: id }).lean().exec();

  const modifiedUpdateDetails = { user: user._id, ...additionalDetails };

  let updatedRoleDetail;
  switch (role) {
    case "student":
      updatedRoleDetail = await Student.findByIdAndUpdate(
        id,
        { $set: modifiedUpdateDetails },
        { new: true }
      );
      break;
    case "admin":
      updatedRoleDetail = await Admin.findByIdAndUpdate(
        id,
        { $set: modifiedUpdateDetails },
        { new: true }
      );
      break;
    case "faculty":
      updatedRoleDetail = await Faculty.findByIdAndUpdate(
        id,
        { $set: modifiedUpdateDetails },
        { new: true }
      );
      break;
    default:
      return res.status(400).json({ error: "Invalid role" });
  }

  if (!updatedRoleDetail) {
    return res.status(404).json({ error: "Role detail not found" });
  }

  res.status(201).json({ message: `New user ${role} created` });
});

const getAllDetail = asyncHandler(async (req, res) => {
  const { role } = req.params;

  let roleDetails;

  switch (role) {
    case "admin":
      roleDetails = await Admin.find().select("-user").lean().exec();
      break;
    case "faculty":
      roleDetails = await Faculty.find().select("-user").lean().exec();
      break;
    case "student":
      roleDetails = await Student.find().select("-user").lean().exec();
      break;
    default:
      return res.status(400).json({ message: "Invalid role" });
  }

  if (!roleDetails) {
    return res.status(400).json({ message: "No Details exist" });
  } else {
    res.status(200).json(roleDetails);
  }
});

const getDetail = asyncHandler(async (req, res) => {
  const { role, id } = req.params;

  let roleDetail;

  switch (role) {
    case "admin":
      roleDetail = await Admin.findById(id).lean().exec();
      break;
    case "faculty":
      roleDetail = await Faculty.findById(id).lean().exec();
      break;
    case "student":
      roleDetail = await Student.findById(id).lean().exec();
      break;
    default:
      return res.status(400).json({ message: "Invalid role" });
  }

  if (!roleDetail) {
    return res.status(400).json({ message: "No Detail exist" });
  } else {
    res.status(200).json(roleDetail);
  }
});

const updateRoleDetail = asyncHandler(async (req, res) => {
  const { id, role } = req.params;
  const updateDetails = req.body;

  let updatedRole;
  switch (role) {
    case "student":
      updatedRole = await Student.findByIdAndUpdate(id, updateDetails, {
        new: true,
      });
      break;
    case "faculty":
      updatedRole = await Faculty.findByIdAndUpdate(id, updateDetails, {
        new: true,
      });
      break;
    case "admin":
      updatedRole = await Admin.findByIdAndUpdate(id, updateDetails, {
        new: true,
      });
      break;
    default:
      return res.status(400).json({ message: "Invalid role" });
  }

  res.json({ message: `${updatedRole.user} updated` });
});

const userController = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getAllDetail,
  getDetail,
  addRoleDetail,
  updateRoleDetail,
};
export default userController;
