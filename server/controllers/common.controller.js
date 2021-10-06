const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ProcurementOfficer = require("../models/procurement.officer.model");
const ProcurementManager = require("../models/procurement.manager.model");
const SiteManager = require("../models/site.manager.model");
const Supplier = require("../models/supplier.model");
const Site = require("../models/site.model");

/**
 * use to login users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const loginUser = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { username, password } = req.body;

		// * user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		let userRole;
		if (username.includes("@manager")) {
			User = ProcurementManager;
			userRole = "manager";
		} else if (username.includes("@officer")) {
			User = ProcurementOfficer;
			userRole = "officer";
		} else if (username.includes("@sitemanager")) {
			User = SiteManager;
			userRole = "sitemanager";
		} else if (username.includes("@supplier")) {
			User = Supplier;
			userRole = "supplier";
		} else {
			return res.status(401).json({
				message: "Wrong username or password",
			});
		}

		// * user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			let conditions;

			if (userRole === "supplier") {
				conditions = { username: username, status: "approved" };
			} else {
				conditions = { username: username };
			}

			// * checking for email existence
			const existingUser = await User.findOne(conditions);

			if (!existingUser) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			if (!existingUser) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// * checking for password existence
			const isPasswordCorrect = await bcrypt.compare(
				password,
				existingUser.password
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// * logging the user
			const token = jwt.sign(
				{ user: existingUser._id, type: userRole },
				process.env.JWT_SECRET
			);

			if (userRole === "sitemanager") {
				const site = await Site.findOne({ siteManagerId: existingUser._id });
				return res
					.cookie("token", token, { httpOnly: true })
					.send({ type: userRole, site: site._id, user: existingUser.name });
			}
			//* sending token as a cookie
			return res
				.cookie("token", token, { httpOnly: true })
				.send({ type: userRole, user: existingUser.name });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(406).send();
};

/**
 * use to log out the users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const logoutUser = (req, res) => {
	return res
		.cookie("token", "", { httpOnly: true, expires: new Date(0) })
		.send();
};

/**
 * use to check if the users are logged in or not
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const checkLoggedIn = (req, res) => {
	if (req.cookies) {
		try {
			const token = req.cookies.token;

			if (!token) return res.json({ state: false, role: "" });

			const verify = jwt.verify(token, process.env.JWT_SECRET);

			if (!verify) return res.json({ state: false, role: "" });

			return res.json({ state: true, role: verify.type });
		} catch (err) {
			console.error(err.message);
			return res.json({ state: false, role: "" });
		}
	}
};

/**
 * use to get all the employees
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getAllEmployees = async (req, res) => {
	try {
		const officers = await ProcurementOfficer.find();
		const siteManagers = await SiteManager.find();
		officers;
		return res.status(200).json({ employees: [...officers, ...siteManagers] });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
	}
};

module.exports = { loginUser, logoutUser, checkLoggedIn, getAllEmployees };
