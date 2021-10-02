const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
	location: { type: String, require: true, trim: true },
	siteManager: { type: mongoose.Schema.Types.ObjectId, ref: "siteManagers" },
});

const Site = mongoose.model("sites", SiteSchema);

module.exports = Site;
