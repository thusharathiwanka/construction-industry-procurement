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
                maxCapacity:req.body.maxCapacity
            })
			res.status(200).json(saveOrder._id);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
}

const saveInventoryItem = async(req, res)=>{
    try {
		if (req.body) {
			const inventory = await Inventory({
				item: res.body.item,
				maxCapacity: res.body.maxCapacity,
				quantity:res.body.quantity
			})
			await inventory.save()
			res.status(200).json(inventory);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
} 

module.exports = {
	getInventoryItem,
	updateInventory,
	saveInventoryItem
}