const mongoose = require("mongoose");

const SiteManagerSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		email: { type: String, require: true, trim: true },
		username: { type: String, require: true, trim: true },
		password: { type: String, require: true, trim: true },
		weeklyWorkHrs: { type: String, require: true, trim: true },
		salary: { type: Number, require: true, trim: true },
		siteId: { type: mongoose.Schema.Types.ObjectId, ref: "sites" },
	},
	{ timestamps: true }
);

const SiteManager = mongoose.model("siteManagers", SiteManagerSchema);

module.exports = SiteManager;
