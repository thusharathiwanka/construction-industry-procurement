const router = require("express").Router();
const OrderController = require("../controllers/order.controller");

router.post("/", OrderController.saveOrder);
module.exports = router;
