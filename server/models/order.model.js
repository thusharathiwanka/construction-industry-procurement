const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		siteManagerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "siteManagers",
		},
		isApprovedByOfficer: { type: String, default: "pending", trim: true },
		isApprovedByManager: { type: String, default: "pending", trim: true },
		DeliveryStatus: { type: String, default: "pending", trim: true },
		address:{type: String, trim: true, required: true },
		itemName:{type: String, required: true},
		quantity: { type: Number, required: true },
		total: { type: Number, trim: true, default: 0 },
		rejectMassage:{type:String},
		requiredDate:{type:String, required: true},
		urgentOrder:{type:Boolean, default:false},
		supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "suppliers" },
		siteId: { type: mongoose.Schema.Types.ObjectId, ref: "sites" },
		orderItem: { type: mongoose.Schema.Types.ObjectId, ref: "materials" },
	},
	{ timestamps: true },
	{ versionKey: false }
);

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
