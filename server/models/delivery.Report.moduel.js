const mongoose = require("mongoose");

const DeliveryReport = mongoose.Schema({
    orderId:{type: mongoose.Schema.Types.ObjectId,
			ref: "orders"},
    description:{ type: String, required: true },
    supplierId:{type: mongoose.Schema.Types.ObjectId,
			ref: "suppliers" }
})

const deliveryReport = mongoose.model("deliveryreport", DeliveryReport);

module.exports = deliveryReport;