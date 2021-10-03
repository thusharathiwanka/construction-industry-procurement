const Supplier = require("../models/supplier.model");

/**
 * use to save a  new supplier
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const saveSupplier = async (req, res) => {
	try {
		const newSupplier = new Supplier(req.body);
		await newSupplier.save();
		res.status(201).json(newSupplier._id);
	} catch (err) {
		res.status(400).json({ message: err.message });
		// console.log(err.message);
	}
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
