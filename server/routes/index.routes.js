const router = require("express").Router();

router.use("/site-managers", require("./site.manager.routes"));
router.use("/suppliers", require("./supplier.routes"));

module.exports = router;
