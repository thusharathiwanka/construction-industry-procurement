const router = require("express").Router();

const CommonController = require("../controllers/common.controller");

router.post("/login", CommonController.loginUser);

module.exports = router;
