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

app.listen(port, () => {
  console.log("Backend server is running on port", port);
});
