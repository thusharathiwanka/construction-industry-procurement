const router = require("express").Router();

const ProcurementOfficerController = require("../controllers/procurement.officer.controller");

router.post("/", ProcurementOfficerController.saveProcurementOfficer);

module.exports = router;
