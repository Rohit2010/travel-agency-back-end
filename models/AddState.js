const mongoose = require("mongoose");

const AddState = new mongoose.Schema(
  {
    state: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddState", AddState);
