const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		username: { type: String, require: true, trim: true },
		password: { type: String, require: true, trim: true, select: false },
		phone: { type: String, require: true, trim: true },
		materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "materials" }],
	},
	{ timestamps: true }
);

const Supplier = mongoose.model("suppliers", SupplierSchema);

module.exports = Supplier;
