const mongoose = require("mongoose");
const StudentDetailSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    registrationNumber: { type: String, unique: true },
    roleNumber: { type: String, unique: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    address: { type: String },
    phone: { type: String },
    dateOfBirth: { type: Date },
  },
  { timestamps: true }
);

mongoose.model("StudentDetail", StudentDetailSchema);
