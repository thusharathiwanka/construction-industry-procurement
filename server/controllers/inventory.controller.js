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
			const resInventory = await Inventory.findOneAndUpdate({item:req.body.item},{
                quantity:req.body.quantity
            })
			res.status(200).json(resInventory);
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
				item: req.body.item,
				maxCapacity: req.body.maxCapacity,
				quantity:req.body.quantity
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