const Inventory = require("../models/inventory.model")

const getInventoryItem = async(req, res)=>{
    try {
		if (req.body) {
			const inventory = await Inventory.find({siteId:req.params.id})
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
			await Inventory.findOneAndUpdate({item:req.body.item},{
                max:req.body.max,
            })
			res.status(200).json(saveOrder._id);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
}

module.exports = {
	getInventoryItem,
	updateInventory,
}