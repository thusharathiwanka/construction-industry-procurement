const Service = require("../models/service.model");

/**
 * saves the services
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const saveService = async (req, res) => {
	if (req.body) {
		const { Service, unit, user } = req.body;
		// * user inputs validation
		if (!Service || !unit) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save service
			const newService = new Service({
				Service,
				unit,
				supplierId: user,
			});

			await newService.save();

			// * sending as saved
			return res.status(201).send({ id: newService._id });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * get services of specific supplier
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const getServicesOfSupplier = async (req, res) => {
	try {
		const services = await Service.findOne({ supplierId: req.body.user });
		res.status(200).json({ services: services });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

/**
 * get services
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const getServices = async (req, res) => {
	try {
		const services = await Service.find();
		res.status(200).json({ services: services });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { saveService, getServices, getServicesOfSupplier };
