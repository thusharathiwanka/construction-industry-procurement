const SiteManager = require("../models/site.manager.model");
const Site = require("../models/site.model");

/**
 * saves the site
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const saveSite = async (req, res) => {
	if (req.body) {
		const { name, location, siteManagerId } = req.body;
		// * user inputs validation
		if (!name || !location || !siteManagerId) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save site
			const newSite = new Site({
				name,
				location,
				siteManagerId,
			});

			await newSite.save();

			await SiteManager.findByIdAndUpdate(req.body.siteManagerId, {
				isAssigned: true,
			});

			// * sending as saved
			return res.status(201).send({ id: newSite._id });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * get all sites
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const getSites = async (req, res) => {
	try {
		const sites = await Site.find().populate("siteManagerId", "name email");
		res.status(200).json({ sites: sites });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

/**
 * remove the site
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const removeSite = async (req, res) => {
	if (req.params) {
		const { id } = req.params;
		try {
			await Site.findByIdAndDelete(id);

			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

module.exports = {
	saveSite,
	getSites,
	removeSite,
};
