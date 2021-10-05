const router = require("express").Router();

const OrderController = require("../controllers/order.controller");

const { verifySiteManagerAuth } = require("../auth/site.manager.auth");
const { verifySupplierAuth } = require("../auth/supplier.auth");
const {
	verifyProcurementOfficer,
} = require("../auth/procurement.officer.auth");
const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");

router.post("/", verifySiteManagerAuth, OrderController.saveOrder);

router.get("/", OrderController.allOrders);
router.get(
	"/officer",
	verifyProcurementOfficer,
	OrderController.getItemDetailsOfficer
);
router.get(
	"/proc",
	verifyProcurementManagerAuth,
	OrderController.getItemDetailsProcurement
);
router.get(
	"/supplier",
	verifySupplierAuth,
	OrderController.getOrdersOfSupplier
);

router.put(
	"/officer/:id",
	verifyProcurementOfficer,
	OrderController.changeOrderStatusByOfficer
);
router.put(
	"/proc/:id",
	verifyProcurementManagerAuth,
	OrderController.changeOrderStatusByManager
);
router.put(
	"/supplier/prepare:id",
	verifySupplierAuth,
	OrderController.changeDeliveryStatusBySupplierAsPreparing
);
router.put(
	"/supplier/deliver/:id",
	verifySupplierAuth,
	OrderController.changeDeliveryStatusBySupplierAsDelivering
);
router.put(
	"/supplier/delivered/:id",
	verifySupplierAuth,
	OrderController.changeDeliveryStatusBySupplierAsDelivered
);

module.exports = router;
