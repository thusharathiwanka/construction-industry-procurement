const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
	},
	{ timestamps: true }
);
const Report = mongoose.model("report", ReportSchema);
module.exports = Report;
