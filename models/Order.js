const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    QNT: { type: Number, required: true },
    cost: { type: Number, required: true },
    total: { type: Number, required: true },
    customer: { type: String, required: true },
    Date: { type: String, required: true },
    orderName: { type: String, required: true },
    state: { type: String, required: true },
    availibilityDate: { type: String },
    deliveryDate: { type: String },
    partNo: { type: Number, required: true },
    totalSize: { type: Number, required: true },
    BK_NO: { type: Number },
    totalBoxes: { type: Number, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
