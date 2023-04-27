const mongoose = require("mongoose");

const AuthDetailSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    resetToken: { type: String },
    resetTokenExpires: { type: Date },
    authToken: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AuthDetail", AuthDetailSchema);
