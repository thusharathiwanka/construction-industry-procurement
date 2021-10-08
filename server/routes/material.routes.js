const router = require("express").Router();

const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const MaterialController = require("../controllers/material.controller");

router.post("/", verifyProcurementManagerAuth, MaterialController.saveMaterial);

router.get("/", verifyProcurementManagerAuth, MaterialController.getMaterials);

router.delete(
	"/:id",
	verifyProcurementManagerAuth,
	MaterialController.deleteMaterial
);

module.exports = router;
