const router = require("express").Router();

const { verifySupplierAuth } = require("../auth/supplier.auth");
const ServiceController = require("../controllers/service.controller");

router.post("/", verifySupplierAuth, ServiceController.saveService);

router.get("/", verifySupplierAuth, ServiceController.getServices);
router.get("/:id", verifySupplierAuth, ServiceController.getServicesOfSupplier);

module.exports = router;