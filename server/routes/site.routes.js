const router = require("express").Router();

const SiteController = require("../controllers/site.controller");

router.post("/", SiteController.saveSite);

router.get("/", SiteController.getSites);

module.exports = router;
