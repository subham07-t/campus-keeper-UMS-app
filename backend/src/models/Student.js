import mongoose, { Schema } from "mongoose";

const StudentDetailSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    registrationNumber: { type: String, unique: true, sparse: true },
    roleNumber: { type: String, unique: true, sparse: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    address: { type: String },
    phone: { type: String },
    dateOfBirth: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("StudentDetail", StudentDetailSchema);
