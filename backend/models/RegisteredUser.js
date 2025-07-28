const mongoose = require("mongoose");

const registeredUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    match: /.+\@.+\..+/,
    unique: [true, "Your email address should be unique"],
    timestamps: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    unique: [true, "Your password should be unique"],
    timestamps: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("RegisteredUser", registeredUserSchema);
