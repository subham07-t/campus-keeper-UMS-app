const User = require("../models/User");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Admin = require("../models/Admin");
const asyncHandler = require("express-async-handler");

export const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB but don't return password
  const users = await User.find().select("-password").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

export const createRoleDetail = asyncHandler(async (req, res) => {
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

export const updateRoleDetail = asyncHandler(async (req, res) => {
  const { id, role } = req.params;
  const { updateDetails } = req.body;

  switch (role) {
    case "student":
      updatedRole = await StudentDetail.findByIdAndUpdate(id, updateDetails, {
        new: true,
      });
      break;
    case "faculty":
      updatedRole = await FacultyDetail.findByIdAndUpdate(id, updateDetails, {
        new: true,
      });
      break;
    case "admin":
      updatedRole = await AdminDetail.findByIdAndUpdate(id, updateDetails, {
        new: true,
      });
      break;
    default:
      return res.status(400).json({ message: "Invalid role" });
  }

  res.json({ message: `${updatedRole.user} updated` });
});

export const deleteUser = asyncHandler(async (req, res) => {
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

export const deleteRoleDetail = asyncHandler(async (req, res) => {
  const { id, role } = req.params;

  switch (role) {
    case "student":
      deletedRole = await StudentDetail.findOneAndDelete(id);
      break;
    case "faculty":
      deletedRole = await FacultyDetail.findByIdAndUpdate(id);
      break;
    case "admin":
      deletedRole = await AdminDetail.findByIdAndUpdate(id);
      break;
    default:
      return res.status(400).json({ message: "Invalid role" });
  }

  res.json({ message: `${deletedRole.user} deleted` });
});
