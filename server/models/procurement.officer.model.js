const mongoose = require("mongoose");

const ProcurementOfficeSchema = new mongoose.Schema({
	name: { type: String, require: true, trim: true },
	username: { type: String, require: true, trim: true },
	password: { type: String, require: true, trim: true },
});

const ProcurementOfficer = mongoose.model(
	"procurementOfficers",
	ProcurementOfficeSchema
);

module.exports = ProcurementOfficer;
