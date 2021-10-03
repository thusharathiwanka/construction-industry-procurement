const Order = require("../models/order.model");

/**
 * use to save the order
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const saveOrder = async (req, res) => {
	try {
		if (req.body) {
			const order = new order(req.body);
			await Order.save();
			res.status(200).json(order._id);
		}
	} catch (error) {
		res.status(400);
		console.log(error);
	}
};

/**
 * use to update Order Quantity
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const updateOrderQuantity = async(req, res) => {
	try{
        await Order.findByIdAndUpdate(req.params.id,{
			quantity:req.body.quantity
		})
	}catch (error) {
		res.status(400);
		console.log(error);
	}
}
/**
 * use to change Order Status By Officer
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeOrderStatusByOfficer = async(req, res) => {
		try{
			await Order.findByIdAndUpdate(req.params.id,{
				isApprovedByOfficer:req.body.status
			})
		}
		 catch (error) {
		res.status(400);
		console.log(error);
	}
}; 
/**
 * use to change Order Status By Manager
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeOrderStatusByManager = async(req, res) => {
		try{
			await Order.findByIdAndUpdate(req.params.id,{
				isApprovedByManager:req.body.status
			})
		}
		 catch (error) {
		res.status(400);
		console.log(error);
	}
}; 
/**
 * use to add suppliers
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const addSupplier = async(res, req) => {
	try{
		await Order.findByIdAndUpdate(req.params.id,{
				supplierId:req.body.supplierId
			})
	} catch (error) {
		res.status(400);
		console.log(error);
	}
}

const deletePendingOrders = async(res, req)=>{
	try{
	 const deletedOrder  =	await Order.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedOrder);
	} catch (error) {
		res.status(400);
		console.log(error);
	}
}

const getItemDetailsOfficer = async (req, res) => {
	try
	{
		
		
		const orderList = Order.find()
			res.status(200).json(orderList);
		}
	 catch (error) {
		res.status(400);
		console.log(error);
	}
};
/**
 * use to get items procurement details
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const getItemDetailsProcurement = async (req, res) =>
{
	try{
		const orderListProc = Order.find()
		res.status(200).json(orderListProc);
		
	} catch (error)
	{
		console.log(error);
	}
}




module.exports = {
	saveOrder,
	addSupplier,
	deletePendingOrders,
	updateOrderQuantity,
	changeOrderStatusByOfficer,
	changeOrderStatusByManager,
	getItemDetailsOfficer,
	getItemDetailsProcurement
};
