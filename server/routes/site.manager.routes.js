const router = require("express").Router();

const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const SiteManagerController = require("../controllers/site.manager.controller");

router.post(
	"/",
	verifyProcurementManagerAuth,
	SiteManagerController.saveSiteManager
);

router.get(
	"/",
	verifyProcurementManagerAuth,
	SiteManagerController.getUnassignedSiteManagers
);

module.exports = router;
