const Material = require("../models/material.model");

/**
 * saves the material
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const saveMaterial = async (req, res) => {
	if (req.body) {
		const { name, code } = req.body;
		// * user inputs validation
		if (!name || !code) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save material
			const newMaterial = new Material({
				name,
				code,
			});

			await newMaterial.save();

			// * sending as saved
			return res.status(201).send({ id: newMaterial._id });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};

/**
 * get all materials
 * @param {req} req
 * @param {res} res
 * @returns  res
 */
const getMaterials = async (req, res) => {
	try {
		const materials = await Material.find();
		res.status(200).json({ materials: materials });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	saveMaterial,
	getMaterials,
};
