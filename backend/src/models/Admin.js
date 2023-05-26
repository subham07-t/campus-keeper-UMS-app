import mongoose, { Schema } from "mongoose";

const AdminDetailSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    priority: { type: String, unique: true, sparse: true },
    faculty: { type: Schema.Types.ObjectId, ref: "FacultyDetail" },
  },
  { timestamps: true }
);

export default mongoose.model("AdminDetail", AdminDetailSchema);
