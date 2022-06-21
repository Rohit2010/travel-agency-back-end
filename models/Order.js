const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    ProductName: { type: String, required: true },
    QNT: { type: Number, required: true },
    cost: { type: Number, required: true },
    total: { type: Number, required: true },
    customer: { type: String, required: true },
    date: { type: String, default: null, required: true },
    ordername: { type: String, required: true },
    state: { type: String, required: true },
    availabilityDate: { type: String, default: "" },
    deliveryDate: { type: String, default: "" },
    partno: { type: Number, default: 0 },
    totalsize: { type: Number, required: true },
    BKNO: { type: String, default: "" },
    TotalBoxes: { type: Number, required: true },
    Notes: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
