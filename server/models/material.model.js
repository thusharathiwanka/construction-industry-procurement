const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
	name: { type: String, required: true },
	code: { type: String, required: true },
});

const Material = mongoose.model("materials", MaterialSchema);
module.exports = Material;
