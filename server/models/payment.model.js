const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    amount:{ type: Number  },
    supplierId:{type: mongoose.Schema.Types.ObjectId,
			ref: "suppliers" },
    orderId:{type: mongoose.Schema.Types.ObjectId,
			ref: "orders"}
    
},{timestamps: true})

const Payment = mongoose.model("suppliers", PaymentSchema);
module.exports = Payment;