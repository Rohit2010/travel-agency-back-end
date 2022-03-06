const mongoose = require("mongoose");

const AddBkno = new mongoose.Schema(
  {
    bkno: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddBkno", AddBkno);
