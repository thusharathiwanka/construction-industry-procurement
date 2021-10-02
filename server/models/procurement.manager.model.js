const mongoose = require("mongoose");

const ProcurementManagerSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		username: { type: String, require: true, trim: true },
		password: { type: String, require: true, trim: true },
	},
	{ timestamps: true }
);

const ProcurementManager = mongoose.model(
	"procurementManagers",
	ProcurementManagerSchema
);

module.exports = ProcurementManager;
