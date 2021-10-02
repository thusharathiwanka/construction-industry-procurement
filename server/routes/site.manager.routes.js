const router = require("express").Router();

const SiteManagerController = require("../controllers/site.manager.controller");

router.post("/", SiteManagerController.saveSiteManager);

module.exports = router;
