const router = require("express").Router();

const { verifySupplierAuth } = require("../auth/supplier.auth");
const ServiceController = require("../controllers/service.controller");

router.post("/", verifySupplierAuth, ServiceController.saveService);

router.get("/my", verifySupplierAuth, ServiceController.getServicesOfSupplier);
router.get("/", verifySupplierAuth, ServiceController.getServices);
router.get("/details/:id", ServiceController.getServiceById);
router.get("/:id", ServiceController.getServicesOfSupplierByMaterial);

router.delete("/:id", verifySupplierAuth, ServiceController.deleteService);

module.exports = router;
