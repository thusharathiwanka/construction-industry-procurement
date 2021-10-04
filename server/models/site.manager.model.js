const mongoose = require("mongoose");

const SiteManagerSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		email: { type: String, require: true, trim: true },
		username: { type: String, require: true, trim: true },
		password: { type: String, require: true, trim: true },
		isAssigned: { type: Boolean, require: true, default: false },
		weeklyWorkHrs: { type: String, require: true, trim: true },
		salary: { type: Number, require: true, trim: true },
	},
	{ timestamps: true }
);

const SiteManager = mongoose.model("siteManagers", SiteManagerSchema);

module.exports = SiteManager;
