const mongoose = require("mongoose");
const FacultyDetailSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);
mongoose.model("FacultyDetail", FacultyDetailSchema);
