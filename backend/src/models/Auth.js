import mongoose, { Schema } from "mongoose";

const AuthDetailSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    password: { type: String, required: true },
    resetToken: { type: String },
    resetTokenExpires: { type: Date },
    authToken: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("AuthDetail", AuthDetailSchema);
