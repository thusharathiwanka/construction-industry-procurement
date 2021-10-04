const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
	materialId: { type: mongoose.Schema.Types.ObjectId, ref: "materials" },
	units: { type: Number, trim: true, required: true },
	supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "suppliers" },
});

const Services = mongoose.model("services", ServicesSchema);
module.exports = Services;
