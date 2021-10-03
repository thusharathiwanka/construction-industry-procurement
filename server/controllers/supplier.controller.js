const Supplier = require("../models/supplier.model");

/**
 * use to register the order
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
		res.status(400);
		console.log(err.message);
	}
};

const getSupplier = async(req, res) => {
	try{
		const allSuppliers = await Supplier.find({materials:req.params.id}) 
	}catch (err) {
		res.status(400);
		console.log(err.message);
	}
}


module.exports = { saveSupplier };
