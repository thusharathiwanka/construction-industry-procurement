const Report = required("../models/report.model.js");

const saveReport = async (req, res) => {
	if (req.body) {
		const { description } = req.body;

		// * user inputs validation
		if (!description) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * save report
			const newReport = new Report({
				description,
			});

			console.log(newReport);
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
