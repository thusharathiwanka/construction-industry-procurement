const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, trim: true },
		location: { type: String, require: true, trim: true },
		siteManagerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "siteManagers",
		},
	},
	{ timestamps: true }
);

const Site = mongoose.model("sites", SiteSchema);

module.exports = Site;
