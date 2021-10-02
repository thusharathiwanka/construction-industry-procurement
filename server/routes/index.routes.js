const router = require("express").Router();

router.use("/officers", require("./procurement.officer.routes"));
router.use("/sitemanagers", require("./site.manager.routes"));
router.use("/suppliers", require("./supplier.routes"));
router.use("/users", require("./common.routes"));

module.exports = router;
