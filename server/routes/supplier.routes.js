const router = require("express").Router();

const SupplierController = require("../controllers/supplier.controller");

router.post("/", SupplierController.saveSupplier);

module.exports = router;
