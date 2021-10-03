const Inventory = require("../models/inventory.model")

const getInventoryItem = async(req, res)=>{
    try {
		if (req.body) {
			const inventory = await Inventory.findById()
			res.status(200).json(inventory);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
} 

const updateInventory = async(req, res)=>{
    try {
		if (req.body) {
			await Inventory.findByIdAndUpdate(req.params.id,{
                quantity:req.body.quantity,
                max:req.body.max,
                min:req.body.min
            })
			res.status(200).json(saveOrder._id);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
}