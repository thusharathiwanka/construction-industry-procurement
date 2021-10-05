const mongoose = require("mongoose");

const Inventory = mongoose.Schema({
	siteId: { type: mongoose.Schema.Types.ObjectId, ref: "sites" },
	item: { type: String, required: true },
	quantity: { type: Number, required: true },
	maxCapacity: { type: Number, required: true },
});

const inventory = mongoose.model("inventory", Inventory);

module.exports = inventory;
