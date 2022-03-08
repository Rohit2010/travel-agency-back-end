const router = require("express").Router();
const Items = require("../models/Item");

//post data in the item table

router.post("/post", async (req, res) => {
  try {
    const itemData = new Items({
      brand: req.body.brand,
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      tradeName: req.body.tradeName,
      pcsInbox: req.body.pcsInbox,
      minimumOrder: req.body.minimumOrder,
      cost: req.body.cost,
      long: req.body.long,
      width: req.body.width,
      height: req.body.height,
      boxSize: req.body.boxSize,
    });
    const itemResult = await itemData.save();

    res.status(200).json({ Result: "Item record save successfully" });
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

// GET data from item table

router.get("/get", async (req, res) => {
  try {
    const itemData = await Items.find();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update item
router.post("/update", async (req, res) => {
  try {
    const itemData = {
      brand: req.body.brand,
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      tradeName: req.body.tradeName,
      pcsInbox: req.body.pcsInbox,
      minimumOrder: req.body.minimumOrder,
      cost: req.body.cost,
      long: req.body.long,
      width: req.body.width,
      height: req.body.height,
      boxSize: req.body.boxSize,
    };

    var query = { _id: req.body.id };

    await Items.findOneAndUpdate(query, itemData, { upsert: true });
    res.status(200).json({ Result: "Item record save successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
