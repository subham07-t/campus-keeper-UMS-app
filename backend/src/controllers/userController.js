import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import getModelByRole from "../util/model.js";

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
    res.status(400).json({ message: "Failed to update user" });
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

  const userModel = getModelByRole(role);
  let updatedRoleDetail = await userModel.findByIdAndUpdate(
    id,
    { $set: modifiedUpdateDetails },
    { new: true }
  );

  if (!updatedRoleDetail) {
    return res.status(404).json({ error: "Role detail not found" });
  }

  res.status(201).json({ message: `New user ${role} created` });
});

const getAllDetail = asyncHandler(async (req, res) => {
  const { role } = req.params;

  const userModel = getModelByRole(role);

  const roleDetails = await userModel.find().select("-user").lean().exec();

  if (!roleDetails) {
    return res.status(400).json({ message: "No Details exist" });
  } else {
    res.status(200).json(roleDetails);
  }
});

const getDetail = asyncHandler(async (req, res) => {
  const { role, id } = req.params;

  const userModel = getModelByRole(role);

  const roleDetail = await userModel.findById(id).lean().exec();

  if (!roleDetail) {
    return res.status(400).json({ message: "No Detail exist" });
  } else {
    res.status(200).json(roleDetail);
  }
});

const updateRoleDetail = asyncHandler(async (req, res) => {
  const { id, role } = req.params;
  const updateDetails = req.body;
  const userModel = getModelByRole(role);
  let updatedRole = await userModel.findByIdAndUpdate(id, updateDetails, {
    new: true,
  });
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
