const mongoose = require("mongoose");

const AddCustomer = new mongoose.Schema(
  {
    customer: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddCustomer", AddCustomer);
