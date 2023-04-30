const mongoose = require("mongoose");

const AdminDetailSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "FacultyDetail" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdminDetail", AdminDetailSchema);
