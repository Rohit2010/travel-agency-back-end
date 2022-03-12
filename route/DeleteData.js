const router = require("express").Router();
const AddBrand = require("../models/AddBrand");
const AddCustomer = require("../models/AddCustomer");
const AddOrder = require("../models/AddOrder");
const AddBkno = require("../models/AddBkno");
const AddState = require("../models/AddState");

router.post("/brand", async (req, res) => {
  try {
    const rowsToDelete = req.body.rows;
    for (let i = 0; i < rowsToDelete.length; i++)
      await AddBrand.deleteOne({ _id: rowsToDelete[i] });
    res
      .status(200)
      .json({ status: "ok", message: "Record Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/customer", async (req, res) => {
  try {
    const rowsToDelete = req.body.rows;
    for (let i = 0; i < rowsToDelete.length; i++)
      await AddCustomer.deleteOne({ _id: rowsToDelete[i] });
    res
      .status(200)
      .json({ status: "ok", message: "Record Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/order", async (req, res) => {
  try {
    const rowsToDelete = req.body.rows;
    for (let i = 0; i < rowsToDelete.length; i++)
      await AddOrder.deleteOne({ _id: rowsToDelete[i] });
    res
      .status(200)
      .json({ status: "ok", message: "Record Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/state", async (req, res) => {
  try {
    const rowsToDelete = req.body.rows;
    for (let i = 0; i < rowsToDelete.length; i++)
      await AddState.deleteOne({ _id: rowsToDelete[i] });
    res
      .status(200)
      .json({ status: "ok", message: "Record Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/bkno", async (req, res) => {
  try {
    const rowsToDelete = req.body.rows;
    for (let i = 0; i < rowsToDelete.length; i++)
      await AddBkno.deleteOne({ _id: rowsToDelete[i] });
    res
      .status(200)
      .json({ status: "ok", message: "Record Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
