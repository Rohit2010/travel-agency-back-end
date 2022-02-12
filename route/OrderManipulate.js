const router = require("express").Router();
const Order = require("../models/Order");

//post data in the Order table

router.post("/post", async (req, res) => {
  try {
    const OrderData = new Order({
      ProductName: req.body.productName,
      QNT: req.body.QNT,
      cost: req.body.cost,
      total: req.body.total,
      customer: req.body.customer,
      date: req.body.Date,
      ordername: req.body.orderName,
      state: req.body.state,
      availabilityDate: req.body.availabilityDate,
      deliveryDate: req.body.deliveryDate,
      partno: req.body.partNo,
      totalsize: req.body.totalSize,
      BKNO: req.body.BK_NO,
      TotalBoxes: req.body.totalBoxes,
      Notes: req.body.notes,
    });
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
