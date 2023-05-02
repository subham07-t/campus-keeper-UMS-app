import mongoose, { Schema } from "mongoose";

const FacultyDetailSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
export default mongoose.model("FacultyDetail", FacultyDetailSchema);
