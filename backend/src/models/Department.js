const mongoose = require("mongoose");
const DepartmentDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    faculty: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
mongoose.model("Department", DepartmentDetailSchema);
