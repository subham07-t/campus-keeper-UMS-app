const mongoose = require("mongoose");
const DegreeDetailSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    level: {
      type: String,
      enum: ["bachelor", "master", "doctorate"],
      required: true,
    },
    duration: { type: Number, required: true },
    description: { type: String },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    courses: [
      {
        course: {
          type: Schema.Types.ObjectId,
          ref: "Course",
        },
        semester: {
          type: Number,
          required: true,
        },
      },
    ],
    prerequisites: [{ type: String }],
    faculty: [
      {
        type: Schema.Types.ObjectId,
        ref: "FacultyDetail",
      },
    ],
    graduates: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
mongoose.model("DegreeDetail", DegreeDetailSchema);
