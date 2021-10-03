const mongoose = require("mongoose");

const DeliveryReport = mongoose.Schema(
	{
		orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders" },
		item: { type: String, required: true },
		quantity: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ timestamp: true }
);

const deliveryReport = mongoose.model("deliveryReports", DeliveryReport);

module.exports = deliveryReport;
