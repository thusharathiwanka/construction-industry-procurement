const router = require("express").Router();

const CommonController = require("../controllers/common.controller");

router.post("/login", CommonController.loginUser);
router.post("/logout", CommonController.logoutUser);

router.get("/logged", CommonController.checkLoggedIn);

module.exports = router;
