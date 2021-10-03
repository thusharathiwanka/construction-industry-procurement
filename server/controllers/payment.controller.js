const Payment = require("../models/payment.model")


const savePayment = async(req, res) => {
    try {
		if (req.body) {
			const savePayment = new Payment(req.body);
			await savePayment.save();
			res.status(200).json(savePayment._id);
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

const getPayment = async(req, res) => {
    try {
			const payment = await Payment.find({orderId:req.params.id})
			res.status(200).json(payment);
		
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

module.exports = {
	savePayment,
	getPayment,
}