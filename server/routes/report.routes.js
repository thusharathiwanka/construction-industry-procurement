const router = require("express").Router();

const DeliveryReportController = require("../controllers/delivery.report.controller");
const goodsReportController = require("../controllers/goods.report.controller");

router.get("/goodreport", DeliveryReportController.getDeliveryReport);
router.get("/goodreport", goodsReportController.getGoodsReport);

router.post("/goodreport", DeliveryReportController.saveDeliveryReport);
router.post("/goodreport", goodsReportController.saveGoodsReport);

module.exports = router;
