const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
      default: "student",
    },
    roleDetails: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "role",
    },
    authDetails: { type: mongoose.Schema.Types.ObjectId, ref: "AuthDetail" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
