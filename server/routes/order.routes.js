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

router.get("/", verifySiteManagerAuth, OrderController.allOrders);
router.get(
	"/officer",
	verifyProcurementOfficer,
	OrderController.getItemDetailsOfficer
);
router.get("/officer/orders", OrderController.OrdersList);

router.put("/", OrderController.allOrders);

router.get("/getApproveOrders", OrderController.getApproveOrders);

router.put(
	"/officer/:id",
	verifyProcurementOfficer,
	OrderController.changeOrderStatusByOfficer
);
router.get(
	"/proc",
	verifyProcurementManagerAuth,
	OrderController.getItemDetailsProcurement
);

router.get(
	"/approved",
	verifySiteManagerAuth,
	OrderController.getManagerApprovedOrders
);

router.delete(
	"/delete/:id",
	verifySiteManagerAuth,
	OrderController.deletePendingOrders
);

router.get(
	"/supplier/:id",
	verifySupplierAuth,
	OrderController.getOrdersOfSupplier
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
	"/supplier/prepare/:id",
	verifySupplierAuth,
	OrderController.changeDeliveryStatusBySupplierAsPreparing
);

router.put(
	"/supplier/delivered/:id",
	verifySupplierAuth,
	OrderController.changeDeliveryStatusBySupplierAsDelivered
);
router.put("/:id", OrderController.addSupplier);
router.put("/error/:id", OrderController.setError);

router.get("/getAllOrdersByManager", OrderController.getAllOrdersByManager);
router.get("/getApproveOrders", OrderController.getApproveOrders);
router.put(
	"/changeStatusToRejected/:id",
	verifyProcurementManagerAuth,
	OrderController.changeStatusToRejected
);
router.put(
	"/changeStatusToApproved/:id",
	verifyProcurementManagerAuth,
	OrderController.changeStatusToApproved
);
router.get("/:id", verifySupplierAuth, OrderController.getOrderById);
module.exports = router;
