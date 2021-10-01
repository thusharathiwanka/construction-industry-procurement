const router = require("express").Router();

router.use("/suppliers", require("./supplier.routes"));

module.exports = router;
