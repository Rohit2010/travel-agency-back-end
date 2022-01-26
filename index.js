const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
var cors = require("cors");
const port = process.env.PORT || 8800;
dotenv.config();

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

app.listen(port, () => {
  console.log("Backend server is running on port", port);
});
