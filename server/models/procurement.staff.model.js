const mongoose = require("mongoose");

const ProcurementStaffSchema = new mongoose.Schema({
	name: { type: String, require: true, trim: true },
	username: { type: String, require: true, trim: true },
	password: { type: String, require: true, trim: true },
});

const ProcurementStaff = mongoose.model(
	"procurementStaff",
	ProcurementStaffSchema
);

module.exports = ProcurementStaff;
