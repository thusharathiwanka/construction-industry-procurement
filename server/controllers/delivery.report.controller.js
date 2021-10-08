const DeliveryReport = require("../models/delivery.report.model");

/**
 * saves the report
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const saveDeliveryReport = async (req, res) => {
	if (req.body) {
		const {
			description,
			itemName,
			quantity,
			_id,
			supplierId,
			total,
			urgentOrder,
			address,
		} = req.body;

		// * user inputs validation
		if (
			!description ||
			!itemName ||
			!quantity ||
			!_id ||
			!address ||
			!supplierId
		) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save report
			const newReport = new DeliveryReport({
				orderId: _id,
				supplierId,
				item: itemName,
				quantity,
				description,
				total,
				urgentOrder,
				address,
			});

			await newReport.save();

			// * sending as saved
			return res.status(201).json({ newReport });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * retrieve delivery reports filtered by orderId
 * @param {Object} req
 * @param {Object} res
 * @returns res
 */
const getDeliveryReport = async (req, res) => {
	try {
		const reports = await DeliveryReport.find({ orderId: req.params.id });
		res.status(200).json(reports);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

/**
 * retrieve delivery reports filtered by supplier id
 * @param {Object} req
 * @param {Object} res
 * @returns res
 */
const getDeliveryReportsBySupplierId = async (req, res) => {
	try {
		const reports = await DeliveryReport.find({ supplierId: req.body.user });
		res.status(200).json(reports);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	saveDeliveryReport,
	getDeliveryReport,
	getDeliveryReportsBySupplierId,
};