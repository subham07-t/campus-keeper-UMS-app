import mongoose, { Schema } from "mongoose";

const DepartmentDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    head: { type: Schema.Types.ObjectId, ref: "User" },
    faculty: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
export default mongoose.model("Department", DepartmentDetailSchema);
