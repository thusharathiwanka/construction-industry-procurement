const router = require("express").Router();

const ReportController = require("../controllers/report.controller");

router.post("/", ReportController.saveReport);

module.exports = router;
