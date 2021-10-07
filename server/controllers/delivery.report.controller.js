const DeliveryReport = require("../models/delivery.report.model");

/**
 * saves the report
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const saveDeliveryReport = async (req, res) => {
	if (req.body) {
		const { description, item, quantity, orderId } = req.body;
		// console.log(req.body);
		// * user inputs validation
		if (!description || !item || !quantity) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save report
			const newReport = new DeliveryReport({
				description,
				item,
				quantity,
				orderId,
			});

			// console.log(newReport);
			await newReport.save();

			// * sending as saved
			return res.status(201).json({ message: "Report successfully created" });
		} catch (err) {
			// console.log(err);
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * retrieve delivery reports filtered by orderId
 * @param {*} req
 * @param {*} res
 */
const getDeliveryReport = async (req, res) => {
	try {
		const reports = DeliveryReport.find({ orderId: req.params.id });
		res.status(200).json(reports);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
module.exports = {
	saveDeliveryReport,
	getDeliveryReport,
};
