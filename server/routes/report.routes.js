const router = require("express").Router();

const DeliveryReportController = require("../controllers/delivery.report.controller");
const goodsReportController = require("../controllers/goods.report.controller");

router.get("/getGoodReports",goodsReportController.getGoodsReport);
router.post("/addGoodReports",goodsReportController.saveGoodsReport);
router.post("/addGoodReports",DeliveryReportController.saveDeliveryReport);
router.get("/addGoodReports",DeliveryReportController.getDeliveryReport);

module.exports = router;
