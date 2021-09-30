const Supplier = require("../models/supplier.model");

const saveSupplier = async (req, res) => {
	try {
		const newSupplier = new Supplier(req.body);
		await newSupplier.save();
		res.status(201).json(newSupplier._id);
	} catch (err) {
		res.status(400);
		console.log(err.message);
	}
};

module.exports = { saveSupplier };
