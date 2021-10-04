const Service = require("../models/service.model");

/**
 * saves the services
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const saveService = async (req, res) => {
	if (req.body) {
		console.log(req.body);
		const { material, units, pricePerUnit, user } = req.body;
		// * user inputs validation
		if (!material || !units || !pricePerUnit) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save service
			const newService = new Service({
				materialId: material,
				units,
				pricePerUnit,
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
		const services = await Service.find({ supplierId: req.body.user })
			.populate("materialId")
			.populate("supplierId");
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
		const services = await Service.find()
			.populate("materialId")
			.populate("supplierId");
		res.status(200).json({ services: services });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { saveService, getServices, getServicesOfSupplier };
