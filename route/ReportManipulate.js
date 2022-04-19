const router = require("express").Router();
const Report = require("../models/Report");
const Order = require("../models/Order");
const Items = require("../models/Item");

router.post("/searchByOrderandstate", async (req, res) => {
  try {
    const ordername = req.body.ordername;
    const state = req.body.state;
    const customername = req.body.customername;
    const bkno = req.body.bkno;

    const findObj = {};

    if (ordername !== "" && ordername !== "All" && ordername !== null)
      findObj.ordername = ordername;
    if (state !== "" && state !== "All" && state !== null)
      findObj.state = state;
    if (customername !== "" && customername !== "All" && customername !== null)
      findObj.customer = customername;
    if (bkno !== "" && bkno !== "All" && bkno !== null) findObj.BKNO = bkno;

    const result = await Order.find(findObj);

    res.status(200).json({ result: result, status: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/searchByBrand", async (req, res) => {
  try {
    const brand = req.body.brand;
    const state = req.body.state;
    const customer = req.body.customer;

    const findObj = {};
    const brandObj = {};
    if (brand !== "" && brand !== "All" && brand !== null)
      brandObj.brand = brand;
    if (state !== "" && state !== "All" && state !== null)
      findObj.state = state;
    if (customer !== "" && customer !== "All" && customer !== null)
      findObj.customer = customer;

    const itemsData = Items.find(
      brandObj,
      "-_id productName",
      async (err, result) => {
        const itemResult = result.map((val, index) => {
          return val.productName;
        });
        const orderResult = await Order.find({
          ProductName: itemResult,
          ...findObj,
        });
        return res.json({ result: orderResult, status: "ok" });
      }
    );

    // const result = await Order.find(findObj);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/searchByBkno", async (req, res) => {
  try {
    const BKNO = req.body.bkno;
    const state = req.body.state;
    const customername = req.body.customername;

    const result = await Order.find({
      BKNO: BKNO,
      state: state,
      customer: customername,
    });
    res.status(200).json({ result: result, status: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
