const Supplier = require("../models/supplier.model");

const hashPassword = require("../helpers/hash.password");

/**
 * use to save a  new supplier
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const saveSupplier = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { name, email, username, password, phone } = req.body;
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

		// * user inputs validation
		if (!name || !email || !username || !phone || !password) {
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

		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password must be longer than 6 characters" });
		}

		try {
			// * checking for exiting user with the same email
			const existingUserEmail = await Supplier.findOne({ email: email });
			if (existingUserEmail) {
				return res.status(400).json({
					message: "An account with this email is already registered",
				});
			}

			const existingUserUsername = await Supplier.findOne({
				username: username,
			});
			if (existingUserUsername) {
				return res.status(400).json({
					message: "An account with this username is already registered",
				});
			}

			// * hashing the password
			const hashedPassword = await hashPassword(password);

			// * save user account
			const newSupplier = new Supplier({
				name,
				email,
				username: username + "@supplier",
				password: hashedPassword,
				phone,
			});
			await newSupplier.save();

			return res.status(201).json({ id: newSupplier._id, role: "supplier" });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * use to get all suppliers
 * @param {*} req
 * @param {*} res
 */
const getSupplier = async (req, res) => {
	try {
		const allSuppliers = await Supplier.find({ materials: req.params.id });
		res.status(200).json(allSuppliers);
	} catch (err) {
		res.status(400).json({ message: err.message });
		// console.log(err.message);
	}
};

module.exports = { saveSupplier, getSupplier };
