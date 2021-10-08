const mongoose = require("mongoose");

const GoodsReportSchema = mongoose.Schema({
	orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders" },
	item: { type: String, required: true },
	quantity: { type: Number, required: true },
	review: { type: String, },
	receivedDate: { type: Date, required: true },
	description: { type: String, required: true },
});

const GoodsReport = mongoose.model("goodsReports", GoodsReportSchema);

module.exports = GoodsReport;
