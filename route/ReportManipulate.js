const router = require("express").Router();
const Report = require("../models/Report");

//post data in the Report table

router.post("/post", async (req, res) => {
  const ReportData = new Report({
    productName: req.body.productName,
    QNT: req.body.QNT,
    cost: req.body.cost,
    total: req.body.total,
    state: req.body.state,
    totalSize: req.body.totalSize,
  });
  try {
    const reportResult = await ReportData.save();

    res.status(200).json({ Result: "Report record save successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET data from Report table

router.get("/get", async (req, res) => {
  try {
    const orderData = await Report.find();
    res.status(200).json(orderData);
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
