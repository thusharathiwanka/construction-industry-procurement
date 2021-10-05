const router = require("express").Router();

const InventoryController = require("../controllers/inventory.controller");


router.post("/",InventoryController.saveInventoryItem)
router.patch("/update",InventoryController.updateInventory)
router.get("/",InventoryController.getInventoryItem)

module.exports = router;