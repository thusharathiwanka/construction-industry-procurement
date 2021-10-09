const Supplier = require("../models/supplier.model");

const hashPassword = require("../helpers/hash.password");
const sendMail = require("../configs/email.config");

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
 * @returns res
 */
const getSupplier = async (req, res) => {
	try {
		const allSuppliers = await Supplier.find().sort({ createdAt: -1 });
		res.status(200).json({ suppliers: allSuppliers });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

/**
 * rejects the supplier
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const rejectSupplier = async (req, res) => {
	if (req.params) {
		const { id } = req.params;

		try {
			await Supplier.findByIdAndUpdate(id, {
				status: "rejected",
			});

			const { email } = await Supplier.findById(id);

			await sendMail(
				email,
				"Registration Request",
				`<div><p>Your registration request has been rejected.</p><p>Thank you.</p></div>`
			);

			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * approve the supplier
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const approveSupplier = async (req, res) => {
	if (req.params) {
		const { id } = req.params;

		try {
			await Supplier.findByIdAndUpdate(id, {
				status: "approved",
			});

			const { email } = await Supplier.findById(id);

			await sendMail(
				email,
				"Registration Request",
				`<div><p>Your registration request has been approved. You can login to your account using given credentials.</p><p>Thank you.</p></div>`
			);

			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * remove the supplier
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const removeSupplier = async (req, res) => {
	if (req.params) {
		const { id } = req.params;
		try {
			const { email } = await Supplier.findById(id);
			await Supplier.findByIdAndDelete(id);

			await sendMail(
				email,
				"Terminate Information",
				`<div><p>Your account has been deactivated due to some reason. Contact manager for more details</p><p>Thank you.</p></div>`
			);

			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * save materials of supplier
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const updateSupplierMaterials = async (req, res) => {
	if (req.body) {
		const { material, materialQuantity, user } = req.body;

		// * user inputs validation
		if (!material || !materialQuantity) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			await Supplier.findByIdAndUpdate(user, {
				material: material,
				materialQuantity: materialQuantity,
			});

			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

module.exports = {
	saveSupplier,
	getSupplier,
	approveSupplier,
	rejectSupplier,
	updateSupplierMaterials,
	removeSupplier,
};
