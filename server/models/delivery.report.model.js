const mongoose = require("mongoose");

const DeliveryReportSchema = mongoose.Schema(
	{
		orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders" },
		item: { type: String, required: true },
		quantity: { type: String, required: true },
		description: { type: String, required: true },
		total: { type: String, required: true },
		urgentOrder: { type: String, required: true },
		address: { type: String, required: true },
	},
	{ timestamp: true },
	{ versionKey: false }
);

const DeliveryReport = mongoose.model("deliveryReports", DeliveryReportSchema);

module.exports = DeliveryReport;
