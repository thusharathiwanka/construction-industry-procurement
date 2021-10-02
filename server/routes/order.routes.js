const router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const { verifySiteManagerAuth } = require("../auth/site.manager.auth");

router.post("/", verifySiteManagerAuth, OrderController.saveOrder);

module.exports = router;
