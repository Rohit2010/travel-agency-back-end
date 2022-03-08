const router = require("express").Router();
const AddBrand = require("../models/AddBrand");

//post data in the item table

router.post("/post", async (req, res) => {
  try {
    const brandData = new AddBrand({
      Brand: req.body.Brand,
    });

    const brandResult = await brandData.save();

    res.status(200).json({ Result: "Brand record save successfully" });
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

router.get("/get", async (req, res) => {
  try {
    const brandData = await AddBrand.find();
    res.status(200).json(brandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
