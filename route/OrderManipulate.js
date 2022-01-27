const router = require("express").Router();
const Order = require("../models/Order");

//post data in the Order table

router.post("/post", async (req, res) => {
  const OrderData = new Order({
    productName: req.body.productName,
    QNT: req.body.QNT,
    cost: req.body.cost,
    total: req.body.total,
    customer: req.body.customer,
    Date: req.body.Date,
    orderName: req.body.orderName,
    state: req.body.state,
    availibilityDate: req.body.availibilityDate,
    deliveryDate: req.body.deliveryDate,
    partNo: req.body.deliveryDate,
    totalSize: req.body.totalSize,
    BK_NO: req.body.BK_NO,
    totalBoxes: req.body.totalBoxes,
    notes: req.body.notes,
  });
  try {
    const orderResult = await OrderData.save();

    res.status(200).json({ Result: "order record save successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET data from Order table

router.get("/get", async (req, res) => {
  try {
    const orderData = await Order.find();
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
