const mongoose = require("mongoose");

const AddBrand = new mongoose.Schema(
  {
    Brand: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddBrand", AddBrand);
