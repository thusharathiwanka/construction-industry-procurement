const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
	material: { type: mongoose.Schema.Types.ObjectId, ref: "materials" },
	materialQuantity: { type: Number, trim: true },
	supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "suppliers" },
});

const Services = mongoose.model("services", ServicesSchema);
module.exports = Services;
