const router = require("express").Router();

const DeliveryReportController = require("../controllers/delivery.report.controller");
const goodsReportController = require("../controllers/goods.report.controller");

router.get("/getDeliveryReport", DeliveryReportController.getDeliveryReport);
router.get("/getGoodsReport", goodsReportController.getGoodsReport);

router.post("/saveDeliveryReport", DeliveryReportController.saveDeliveryReport);
router.post("/goodreport", goodsReportController.saveGoodsReport);

module.exports = router;
