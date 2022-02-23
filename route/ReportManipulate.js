const router = require("express").Router();
const Report = require("../models/Report");
const Order = require("../models/Order");

//post data in the Report table

router.post("/post", async (req, res) => {
  try {
    const ReportData = new Report({
      productName: req.body.productName,
      QNT: req.body.QNT,
      cost: req.body.cost,
      total: req.body.total,
      state: req.body.state,
      totalSize: req.body.totalSize,
    });
    const reportResult = await ReportData.save();

    res.status(200).json({ Result: "Report record save successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET data from Report table

router.get("/get", async (req, res) => {
  try {
    const orderData = await Order.find();
    const dataToSend = [];
    for (let i = 0; i < orderData.length; i++) {
      let obj = {};
      obj.ProductName = orderData[i].ProductName;
      obj.QNT = orderData[i].QNT;
      obj.cost = orderData[i].cost;
      obj.total = orderData[i].total;
      obj.state = orderData[i].state;
      obj.totalsize = orderData[i].totalsize;
      obj.customer = orderData[i].customer;
      dataToSend.push(obj);
    }
    res.status(200).json(dataToSend);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET sum of all the total attribute in the report table

router.get("/sumTotal", async (req, res) => {
  try {
    const orderData = await Report.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: "$total",
          },
        },
      },
    ]);
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET sum of all the totalSize attribute in the report table

router.get("/sumTotalSize", async (req, res) => {
  try {
    const orderData = await Report.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalSize",
          },
        },
      },
    ]);
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
