const Report = require("../models/report.model.js");

/**
 * saves the report
 * @param {*} req
 * @param {*} res
 * @returns  a new report
 */
const saveReport = async (req, res) => {
	if (req.body) {
		const { description, name } = req.body;
		// console.log(req.body);
		// * user inputs validation
		if (!description || !name) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save report
			const newReport = new Report({
				description,
				name,
			});

			// console.log(newReport);
			await newReport.save();

			// * sending as saved
			return res.status(201).send("Report successfully created");
		} catch (err) {
			// console.log(err);
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(400).send();
};
module.exports = {
	saveReport,
};
