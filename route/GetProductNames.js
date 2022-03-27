const router = require("express").Router();
const Items = require("../models/Item");
const AddCustomer = require("../models/AddCustomer");
const AddOrder = require("../models/AddOrder");
const AddBkno = require("../models/AddBkno");
const AddState = require("../models/AddState");

//post data in the item table

// GET data from Brand table

router.get("/get", async (req, res) => {
  try {
    const productData = await Items.find();
    const dataToSend = [];
    for (let i = 0; i < productData.length; i++) {
      let obj = {};
      obj.productName = productData[i].productName;
      dataToSend.push(obj);
    }
    res.status(200).json(dataToSend);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/getvaluesforproduct", async (req, res) => {
  try {
    const costData = await Items.findOne({
      productName: req.body.productName,
    });
    res.status(200).json(costData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/addCustomer", async (req, res) => {
  try {
    const customerData = new AddCustomer({
      customer: req.body.customer,
    });
    const customerResult = await customerData.save();

    res.status(200).json({ Result: "Customer record save successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({
        err: err,
        status: "not ok",
        errmsg: "Duplicate value",
      });
    }
    res.status(500).json(err);
  }
});

// GET data from Brand table

router.get("/getCustomer", async (req, res) => {
  try {
    const customerData = await AddCustomer.find();
    res.status(200).json(customerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add order
router.post("/addOrder", async (req, res) => {
  try {
    const orderData = new AddOrder({
      order: req.body.order,
    });
    const orderResult = await orderData.save();

    res.status(200).json({ Result: "Order record save successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({
        err: err,
        status: "not ok",
        errmsg: "Duplicate value",
      });
    }
    res.status(500).json(err);
  }
});
// Get order Data
router.get("/getOrder", async (req, res) => {
  try {
    const orderData = await AddOrder.find();
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Add bkno
router.post("/addBkno", async (req, res) => {
  try {
    const bknoData = new AddBkno({
      bkno: req.body.bkno,
    });
    const bknoResult = await bknoData.save();

    res.status(200).json({ Result: "bkno record save successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({
        err: err,
        status: "not ok",
        errmsg: "Duplicate value",
      });
    }
    res.status(500).json(err);
  }
});
// Get bkno
router.get("/getBkno", async (req, res) => {
  try {
    const bknoData = await AddBkno.find();
    res.status(200).json(bknoData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Add state
router.post("/addState", async (req, res) => {
  try {
    const stateData = new AddState({
      state: req.body.state,
    });
    const stateResult = await stateData.save();

    res.status(200).json({ Result: "state record save successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({
        err: err,
        status: "not ok",
        errmsg: "Duplicate value",
      });
    }
    res.status(500).json(err);
  }
});
// Get state
router.get("/getState", async (req, res) => {
  try {
    const stateData = await AddState.find();
    res.status(200).json(stateData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/deleterows", async (req, res) => {
  try {
    const rowsToDelete = req.body.rows;
    console.log(rowsToDelete);

    for (let i = 0; i < rowsToDelete.length; i++)
      await Items.deleteOne({ _id: rowsToDelete[i] });

    res.status(200).json({ Result: "Deleted successfully", status: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
