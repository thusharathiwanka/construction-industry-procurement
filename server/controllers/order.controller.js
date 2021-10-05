const Order = require("../models/order.model");
const Site = require("../models/site.model");
/**
 * use to save the order
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const saveOrder = async (req, res) => {
	try {
		if (req.body) {
			const { location } = await Site.findById(req.body.siteid);
			console.log(location);
			const saveOrder = new Order({
				itemName: req.body.item,
				address: location,
				quantity: req.body.quantity,
			});
			await saveOrder.save();
			res.status(200).json(saveOrder._id);
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * use to update Order Quantity
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const updateOrderQuantity = async (req, res) => {
	try {
		await Order.findByIdAndUpdate(req.params.id, {
			quantity: req.body.quantity,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
		// console.log(error);
	}
};

/**
 * use to change Order Status By Officer
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeOrderStatusByOfficer = async (req, res) => {
	try {
		await Order.findByIdAndUpdate(req.params.id, {
			isApprovedByOfficer: req.body.status,
		});
	} catch (error) {
		res.status(400).json({ message: error.json });
		// console.log(error);
	}
};

/**
 * use to change Order Status By Manager
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeOrderStatusByManager = async (req, res) => {
	try {
		await Order.findByIdAndUpdate(req.params.id, {
			isApprovedByManager: req.body.status,
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * use to add suppliers
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const addSupplier = async (res, req) => {
	try {
		await Order.findByIdAndUpdate(req.params.id, {
			supplierId: req.body.supplierId,
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * deletes a  order by Id
 * @param {*} res
 * @param {*} req
 */
const deletePendingOrders = async (res, req) => {
	try {
		const deletedOrder = await Order.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedOrder);
	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * retrive all orders where isApprovedByOfficer = "pending"
 * @param {*} req
 * @param {*} res
 */
const getItemDetailsOfficer = async (req, res) => {
	try {
		const orderListOff = await Order.find({ isApprovedByOfficer: "pending" });
		res.status(200).json({ orders: orderListOff });
	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * retrive all orders where isApprovedByManager = "pending"
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

const getItemDetailsProcurement = async (req, res) => {
	try {
		const orderListProc = await Order.find({ isApprovedByManager: "pending" });
		res.status(200).json(orderListProc);
	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * retrives all orders in the orders table
 * @param {*} req
 * @param {*} res
 */
const allOrders = async (req, res) => {
	try {

		const allOrders = await Order.find().populate("siteManagerId");
		res.status(200).json({ orders: allOrders });

	} catch (error) {
		res.status(400).json({ message: error.message });
		// console.log(error);
	}
};

/**
 * retrieves all orders of given supplier
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getOrdersOfSupplier = async (req, res) => {
	try {
		const allOrders = await Order.find({ supplierId: req.body.user }).populate(
			"siteManagerId"
		);
		res.status(200).json({ orders: allOrders });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	saveOrder,
	addSupplier,
	deletePendingOrders,
	updateOrderQuantity,
	changeOrderStatusByOfficer,
	changeOrderStatusByManager,
	getItemDetailsOfficer,
	getItemDetailsProcurement,
	allOrders,
	getOrdersOfSupplier,
};
