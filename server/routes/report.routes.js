const router = require("express").Router();

const DeliveryReportController = require("../controllers/delivery.report.controller");
const goodsReportController = require("../controllers/goods.report.controller");

router.get("/deliveryreport", DeliveryReportController.getDeliveryReport);
router.get("/goodsreport", goodsReportController.getGoodsReport);

router.post("/deliveryreport", DeliveryReportController.saveDeliveryReport);
router.post("/goodsreport", goodsReportController.saveGoodsReport);

module.exports = router;
