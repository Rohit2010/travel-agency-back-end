const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    productDescription: { type: String },
    tradeName: { type: String, required: true },
    pcsInbox: { type: Number, required: true },
    minimumOrder: { type: Number, required: true },
    cost: { type: Number, required: true },
    long: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    boxSize: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
