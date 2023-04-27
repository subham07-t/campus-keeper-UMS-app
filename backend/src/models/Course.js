const mongoose = require("mongoose");
const CourseDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    faculty: { type: Schema.Types.ObjectId, ref: "User", required: true },
    students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);
mongoose.model("Course", CourseDetailSchema);
