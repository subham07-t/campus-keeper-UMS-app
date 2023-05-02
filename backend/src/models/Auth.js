import mongoose from "mongoose";

const AuthDetailSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    resetToken: { type: String },
    resetTokenExpires: { type: Date },
    authToken: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("AuthDetail", AuthDetailSchema);
