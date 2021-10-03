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

module.exports = router;
