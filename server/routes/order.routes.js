const router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const { verifySiteManagerAuth } = require("../auth/site.manager.auth");
const { verifyProcurementOfficer } = require("../auth/procurement.officer.auth");
const {verifyProcurementManagerAuth}= require("../auth/procurement.manager.auth")

router.post("/", verifySiteManagerAuth, OrderController.saveOrder);
router.get("/officer", verifyProcurementOfficer, OrderController.getItemDetailsOfficer);
router.get("/proc", verifyProcurementManagerAuth, OrderController.getItemDetailsProcurement);

module.exports = router;
