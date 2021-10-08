const router = require("express").Router();

const { verifySupplierAuth } = require("../auth/supplier.auth");

const DeliveryReportController = require("../controllers/delivery.report.controller");
const goodsReportController = require("../controllers/goods.report.controller");

router.get("/deliveryreport", DeliveryReportController.getDeliveryReport);
router.get("/goodsreport", goodsReportController.getGoodsReport);
router.get(
	"/deliveryreport/supplier",
	verifySupplierAuth,
	DeliveryReportController.getDeliveryReportsBySupplierId
);

router.post("/deliveryreport", DeliveryReportController.saveDeliveryReport);
router.post("/goodsreport", goodsReportController.saveGoodsReport);

module.exports = router;
