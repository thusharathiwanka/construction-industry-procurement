const router = require("express").Router();

const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const CommonController = require("../controllers/common.controller");

router.post("/login", CommonController.loginUser);
router.post("/logout", CommonController.logoutUser);

router.get("/logged", CommonController.checkLoggedIn);
router.get("/", verifyProcurementManagerAuth, CommonController.getAllEmployees);

module.exports = router;
