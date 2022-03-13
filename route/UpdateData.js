const router = require("express").Router();
const Items = require("../models/Item");
const Order = require("../models/Order");

const AddBrand = require("../models/AddBrand");
const AddCustomer = require("../models/AddCustomer");
const AddOrder = require("../models/AddOrder");
const AddBkno = require("../models/AddBkno");
const AddState = require("../models/AddState");

router.post("/brand", async (req, res) => {
  try {
    const previosValue = req.body.pre;
    const newValue = req.body.new;
    const id = req.body.id;

    const data = {
      Brand: newValue,
    };
    const query = { _id: id };
    await AddBrand.findOneAndUpdate(query, data, { upsert: true });
    let options = { multi: true };
    const updation = Items.updateMany(
      { brand: previosValue },
      { $set: { brand: newValue } },
      options,
      (err, result) => {
        if (err) res.status(500).json(err);
        console.log(result);
      }
    );
    res
      .status(200)
      .json({ status: "ok", message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/customer", async (req, res) => {
  try {
    const previosValue = req.body.pre;
    const newValue = req.body.new;

    const id = req.body.id;

    const data = {
      customer: newValue,
    };
    const query = { _id: id };
    await AddCustomer.findOneAndUpdate(query, data, { upsert: true });
    let options = { multi: true };
    const updation = Order.updateMany(
      { customer: previosValue },
      { $set: { customer: newValue } },
      options,
      (err, result) => {
        if (err) res.status(500).json(err);
        console.log(result);
      }
    );

    res
      .status(200)
      .json({ status: "ok", message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/order", async (req, res) => {
  try {
    const previosValue = req.body.pre;
    const newValue = req.body.new;

    const id = req.body.id;

    console.log(previosValue, newValue);

    const data = {
      order: newValue,
    };
    const query = { _id: id };
    await AddOrder.findOneAndUpdate(query, data, { upsert: true });
    let options = { multi: true };
    const updation = Order.updateMany(
      { ordername: previosValue },
      { $set: { ordername: newValue } },
      options,
      (err, result) => {
        if (err) res.status(500).json(err);
        console.log(result);
      }
    );

    res
      .status(200)
      .json({ status: "ok", message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/state", async (req, res) => {
  try {
    const previosValue = req.body.pre;
    const newValue = req.body.new;

    const id = req.body.id;

    const data = {
      state: newValue,
    };
    const query = { _id: id };
    await AddState.findOneAndUpdate(query, data, { upsert: true });
    let options = { multi: true };
    const updation = Order.updateMany(
      { state: previosValue },
      { $set: { state: newValue } },
      options,
      (err, result) => {
        if (err) res.status(500).json(err);
        console.log(result);
      }
    );

    res
      .status(200)
      .json({ status: "ok", message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/bkno", async (req, res) => {
  try {
    const previosValue = req.body.pre;
    const newValue = req.body.new;

    const id = req.body.id;

    const data = {
      bkno: newValue,
    };
    const query = { _id: id };
    await AddBkno.findOneAndUpdate(query, data, { upsert: true });
    let options = { multi: true };
    const updation = Order.updateMany(
      { BKNO: previosValue },
      { $set: { BKNO: newValue } },
      options,
      (err, result) => {
        if (err) res.status(500).json(err);
        console.log(result);
      }
    );

    res
      .status(200)
      .json({ status: "ok", message: "Item updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
