const router = require("express").Router();
const OrderController = require("../controllers/order.controller");

const { verifySiteManagerAuth } = require("../auth/site.manager.auth");
const {
  verifyProcurementOfficer,
} = require("../auth/procurement.officer.auth");
const {
  verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const { verifySupplierAuth } = require("../auth/supplier.auth");

router.post("/", verifySiteManagerAuth, OrderController.saveOrder);

router.get("/", OrderController.allOrders);
router.get(
  "/officer",
  verifyProcurementOfficer,
  OrderController.getItemDetailsOfficer
);

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
  "/supplier/:id",
  verifySupplierAuth,
  OrderController.getOrdersOfSupplier
);

router.put(
  "/proc/:id",
  verifyProcurementManagerAuth,
  OrderController.changeOrderStatusByManager
);
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
module.exports = router;
