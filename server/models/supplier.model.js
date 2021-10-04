const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		email: { type: String, require: true, trim: true },
		username: { type: String, require: true, trim: true },
		password: { type: String, require: true, trim: true },
		phone: { type: String, require: true, trim: true },
		status: { type: String, require: true, trim: true, default: "pending" },
		materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "materials" }],
	},
	{ timestamps: true }
);

const Supplier = mongoose.model("suppliers", SupplierSchema);

module.exports = Supplier;
