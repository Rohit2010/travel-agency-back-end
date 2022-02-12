const router = require("express").Router();
const Items = require("../models/Item");
const AddCustomer = require("../models/AddCustomer");
const AddOrder = require("../models/AddOrder");

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

router.post("/getcostforproduct", async (req, res) => {
  try {
    const costData = await Items.findOne({
      productName: req.body.productName,
    });
    res.status(200).json(costData.cost);
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

router.post("/addOrder", async (req, res) => {
  try {
    const orderData = new AddOrder({
      order: req.body.order,
    });
    const orderResult = await orderData.save();

    res.status(200).json({ Result: "Order record save successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET data from Brand table

router.get("/getOrder", async (req, res) => {
  try {
    const orderData = await AddOrder.find();
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
