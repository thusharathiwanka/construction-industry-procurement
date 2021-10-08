const mongoose = require("mongoose");

const GoodsReportSchema = mongoose.Schema({
	orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders" },
	item: { type: String, required: true },
	agreed: { type: String },
	quantity: { type: Number , required: true },
	review: { type: String , required: true },
	receivedDate: { type: String },
	supplierId: {type:Object , required: true},
	description: { type: String , required: true},
});

const GoodsReport = mongoose.model("goodsReports", GoodsReportSchema);

module.exports = GoodsReport;
