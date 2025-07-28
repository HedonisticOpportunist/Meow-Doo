const mongoose = require("mongoose");

const catSchema = mongoose.Schema(
  {
    cat: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cat", catSchema);
