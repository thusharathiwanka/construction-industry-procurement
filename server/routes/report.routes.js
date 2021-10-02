const router = require("express").Router();

const reportController = require("../controllers/report.controller");

router.post("/", saveReport);

module.exports = router;
