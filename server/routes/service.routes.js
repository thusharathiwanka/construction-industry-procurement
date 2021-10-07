const router = require("express").Router();

const { verifySupplierAuth } = require("../auth/supplier.auth");
const ServiceController = require("../controllers/service.controller");

router.post("/", verifySupplierAuth, ServiceController.saveService);
router.get("/:id", ServiceController.getServicesOfSupplierbyMaterial);

router.get("/", verifySupplierAuth, ServiceController.getServices);
router.get("/my", verifySupplierAuth, ServiceController.getServicesOfSupplier);

router.delete("/:id", verifySupplierAuth, ServiceController.deleteService);

module.exports = router;
