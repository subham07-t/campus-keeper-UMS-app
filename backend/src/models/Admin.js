const mongoose = require("mongoose");

const AdminDetailSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    faculty: { type: Schema.Types.ObjectId, ref: "FacultyDetail" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdminDetail", AdminDetailSchema);
