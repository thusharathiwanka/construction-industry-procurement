const mongoose = require("mongoose");

const GoodsReport = mongoose.Schema({
  
	orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders" },
	item: { type: String, required: true },
	quantity: { type: String, required: true },
	quality: { type: String, required: true },
	receivedDate: { type: String, required: true },
	description: { type: String, required: true },
});

const Goodsreport = mongoose.model("goodsReports", GoodsReport);

module.exports = Goodsreport;
