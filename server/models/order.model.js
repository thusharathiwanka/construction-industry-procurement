const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		siteManagerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "siteManagers",
		},
		isApprovedByOfficer: { type: String, default: "pending" , trim: true },
		isApprovedByManager: { type: String, default: "pending", trim: true },
		status: { type: String, default: "pending", trim: true },
		orderItem: { type: mongoose.Schema.Types.ObjectId, ref: "materials"},
		quantity: { type: Number, required: true },
		total: { type: Number, trim: true,  default: 0 },
		supplierId:{type: mongoose.Schema.Types.ObjectId,
			ref: "suppliers" }
	},
	{ timestamps: true }
);

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
