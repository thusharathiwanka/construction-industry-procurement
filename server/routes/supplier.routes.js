const router = require("express").Router();

const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const SupplierController = require("../controllers/supplier.controller");

router.post("/", SupplierController.saveSupplier);

router.get("/", SupplierController.getSupplier);

router.patch(
	"/reject/:id",
	verifyProcurementManagerAuth,
	SupplierController.rejectSupplier
);
router.patch(
	"/approve/:id",
	verifyProcurementManagerAuth,
	SupplierController.approveSupplier
);

module.exports = router;
