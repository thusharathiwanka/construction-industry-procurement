const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    Amount:{ type: Number  },
    
},{timestamps: true})