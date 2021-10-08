const router = require("express").Router();

const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const ProcurementOfficerController = require("../controllers/procurement.officer.controller");

router.post(
	"/",
	verifyProcurementManagerAuth,
	ProcurementOfficerController.saveProcurementOfficer
);

router.delete(
	"/:id",
	verifyProcurementManagerAuth,
	ProcurementOfficerController.deleteOfficer
);

module.exports = router;
