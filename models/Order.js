const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    ProductName: { type: String, required: true, unique: true },
    QNT: { type: Number, required: true },
    cost: { type: Number, required: true },
    total: { type: Number, required: true },
    customer: { type: String, required: true },
    date: { type: String, required: true },
    ordername: { type: String, required: true },
    state: { type: String, required: true },
    availabilityDate: { type: String },
    deliveryDate: { type: String },
    partno: { type: Number, required: true },
    totalsize: { type: Number, required: true },
    BKNO: { type: String },
    TotalBoxes: { type: Number, required: true },
    Notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
