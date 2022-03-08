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
router.post("/postexcel", async (req, res) => {
  try {
    const excelData = req.body.excelData;

    let tempData = [];
    for (let i = 0; i < excelData.length; i++) {
      let tempObj = {};
      tempObj.ProductName = excelData[i][0];
      tempObj.QNT = excelData[i][1];
      tempObj.cost = excelData[i][2];
      tempObj.total = excelData[i][3];
      tempObj.customer = excelData[i][4];
      tempObj.date = excelData[i][5];
      tempObj.ordername = excelData[i][6];
      tempObj.state = excelData[i][7];
      tempObj.availabilityDate = excelData[i][8];
      tempObj.deliveryDate = excelData[i][9];
      tempObj.partno = excelData[i][10];
      tempObj.totalsize = excelData[i][11];
      tempObj.BKNO = excelData[i][12];
      tempObj.TotalBoxes = excelData[i][13];
      tempObj.Notes = excelData[i][14];

      tempData.push(tempObj);
    }
    let results = await Order.insertMany(tempData);
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
