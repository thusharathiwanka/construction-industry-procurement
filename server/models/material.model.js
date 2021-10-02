const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
	materialName: { type: String, required },
	quantity: { type: Number, required },
});

const Material = mongoose.model("materials", MaterialSchema);
module.exports = Material;
