const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    QNT: { type: Number, required: true },
    cost: { type: Number, required: true },
    total: { type: Number, required: true },
    state: { type: String, required: true },
    totalSize: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);
