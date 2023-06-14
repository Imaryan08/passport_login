const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      dafault: Date.now(),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
