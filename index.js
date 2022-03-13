const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
var cors = require("cors");
const port = process.env.PORT || 8800;
dotenv.config();
const ItemManipulate = require("./route/ItemManipulate");
const OrderManipulate = require("./route/OrderManipulate");
const ReportManipulate = require("./route/ReportManipulate");
const GetProductNames = require("./route/GetProductNames");
const AddBrand = require("./route/AddBrand");
const DeleteData = require("./route/DeleteData");
const UpdateData = require("./route/UpdateData");

// Make connection with db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());

// Make different routes
app.use("/api/ItemManipulate", ItemManipulate);
app.use("/api/OrderManipulate", OrderManipulate);
app.use("/api/ReportManipulate", ReportManipulate);
app.use("/api/GetProductNames", GetProductNames);
app.use("/api/Delete", DeleteData);
app.use("/api/update", UpdateData);
app.use("/api/AddBrand", AddBrand);
app.use("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log("Backend server is running on port", port);
});
