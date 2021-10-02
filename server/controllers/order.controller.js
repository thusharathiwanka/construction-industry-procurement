const order = require("../models/order.model");

const saveOrder = async (req, res) => {
	console.log(req.body);
	try {
		if (req.body) {
			const Order = new order(req.body);
			await Order.save();
			res.status(200).json(Order._id);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
};
const getItemDetails = async (req, res) => {
	try {
		if (req.prams) {
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
};

module.exports = {
	saveOrder,
};
