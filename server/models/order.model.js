const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		siteManagerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "siteManagers",
		},
		isApprovedByOfficer: { type: String, default: "pending" },
		isApprovedByManager: { type: String, default: "pending" },
		status: { type: String, default: "pending" },
		orderItems: {
			type: mongoose.Schema.Types.Mixed,
			require: true,
			trim: true,
		},
		total: { type: Number },
	},
	{ timestamps: true }
);

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
