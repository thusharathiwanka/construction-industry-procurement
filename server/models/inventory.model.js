const mongoose = require("mongoose");

const InventorySchema = mongoose.Schema({
	siteId: { type: mongoose.Schema.Types.ObjectId, ref: "sites" },
	item: { type: String, required: true },
	quantity: { type: Number, required: true },
	maxCapacity: { type: Number, required: true },
});

const Inventory = mongoose.model("inventory", InventorySchema);

module.exports = Inventory;
