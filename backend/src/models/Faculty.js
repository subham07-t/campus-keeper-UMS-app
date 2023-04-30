const mongoose = require("mongoose");
const FacultyDetailSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("FacultyDetail", FacultyDetailSchema);
