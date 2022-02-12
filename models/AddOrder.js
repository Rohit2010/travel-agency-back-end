const mongoose = require("mongoose");

const AddOrder = new mongoose.Schema(
  {
    order: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddOrder", AddOrder);
