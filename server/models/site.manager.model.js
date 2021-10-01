const mongoose = require("mongoose");

const SiteManagerSchema = new mongoose.Schema({
	name: { type: String, require: true, trim: true },
	username: { type: String, require: true, trim: true },
	password: { type: String, require: true, trim: true },
	location: { type: String, require: true, trim: true },
});

const SiteManager = mongoose.model("siteManagers", SiteManagerSchema);

module.exports = SiteManager;
