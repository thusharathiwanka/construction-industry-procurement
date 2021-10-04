const generator = require("generate-password");

const SiteManager = require("../models/site.manager.model");

const hashPassword = require("../helpers/hash.password");
const sendMail = require("../configs/email.config");

/**
 * use to register the site manager
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const saveSiteManager = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { name, email, username, phone, weeklyWorkHrs, salary } = req.body;
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

		// * user inputs validation
		if (!name || !email || !username || !phone || !weeklyWorkHrs || !salary) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		if (!email.match(pattern)) {
			return res
				.status(400)
				.json({ message: "Please enter a valid email address" });
		}

		if (phone.length < 10) {
			return res
				.status(400)
				.json({ message: "Please enter a valid phone number" });
		}

		try {
			// * checking for exiting user with the same email
			const existingUserEmail = await SiteManager.findOne({ email: email });
			if (existingUserEmail) {
				return res.status(400).json({
					message: "An account with this email is already registered",
				});
			}

			const existingUserUsername = await SiteManager.findOne({
				username: username,
			});
			if (existingUserUsername) {
				return res.status(400).json({
					message: "An account with this username is already registered",
				});
			}

			const password = generator.generate({
				length: 10,
				numbers: true,
			});

			if (password.length < 10) {
				return res
					.status(400)
					.json({ message: "Password should be at least 6 characters long" });
			}

			// * hashing the password
			const hashedPassword = await hashPassword(password);

			// * save user account
			const newSiteManager = new SiteManager({
				name,
				email,
				username: username + "@sitemanager",
				password: hashedPassword,
				phone,
				weeklyWorkHrs,
				salary,
			});
			await newSiteManager.save();

			await sendMail(
				email,
				"Your Account Credentials",
				`<div><h2>Your account username ${newSiteManager.username}</h2><h2>Your account password ${password}</h2><p>Thank you.</p></div>`,
				newSiteManager
			);

			return res
				.status(201)
				.json({ id: newSiteManager._id, role: "sitemanager" });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

const getUnassignedSiteManagers = async (req, res) => {
	try {
		const siteManagers = await SiteManager.find({ isAssigned: false });
		res.status(200).json({ sitemanagers: siteManagers });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { saveSiteManager, getUnassignedSiteManagers };
