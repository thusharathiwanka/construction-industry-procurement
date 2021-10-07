const { request } = require("express");
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
				itemName: req.body.item.name,
				address: location,
				quantity: req.body.quantity,
				orderItem: req.body.item.id,
				requiredDate: req.body.requiredDate,
				urgentOrder: req.body.urgentOrder,
				siteManagerId:req.body.user
			});
			await saveOrder.save();
			res.status(200).json(saveOrder._id);
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

/**
 * use to update order quantity
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
  }
};

/**
 * use to change order status by officer
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
  }
};

/**
 * use to change order status by manager
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
  }
};

/**
 * use to change delivery status as preparing by supplier
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeDeliveryStatusBySupplierAsPreparing = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, {
      DeliveryStatus: "preparing",
    });
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * use to change delivery status as delivering by supplier
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeDeliveryStatusBySupplierAsDelivering = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, {
      DeliveryStatus: "delivering",
    });
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * use to change delivery status as delivered by supplier
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeDeliveryStatusBySupplierAsDelivered = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, {
      DeliveryStatus: "delivered",
    });
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
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
  }
};

/**
 * deletes a  order by id
 * @param {Object} res
 * @param {Object} req
 * @returns res
 */
const deletePendingOrders = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * retrieve all orders where isApprovedByOfficer = "pending"
 * @param {Object} req
 * @param {Object} res
 * @returns res
 */
const getItemDetailsOfficer = async (req, res) => {
  try {
    const orderListOff = await Order.find({ isApprovedByOfficer: "pending" });
    res.status(200).json({ orders: orderListOff });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * retrieve all orders where isApprovedByManager = "pending"
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
  }
};

/**
 * retrieves all orders in the orders table
 * @param {Object} req
 * @param {Object} res
 * @returns res
 */
const allOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({siteManagerId:req.body.user});
    res.status(200).json({ orders: allOrders });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
/**
 * retrive all orders where isApprovedByOfficer = "approved"
 * @param {*} req
 * @param {*} res
 */
const getApproveOrders = async (req, res) => {
  try {
    const approved = await Order.find({ isApprovedByOfficer: "approved" });
    res.status(200).json({ orders: approved });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * retrive all orders and change where isApprovedByManager = "reject"
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeStatusToRejected = async (req, res) => {
  try {
    const rejectedList = await Order.findOneAndUpdate(
      { isApprovedByOfficer: "approved", id: req.params.id },
      { isApprovedByManager: "rejected" },
      { new: true }
    );
    res.status(200).json({ orders: rejectedList });
  } catch (error) {
    res.status(400).json({ message: error.message });
    // console.log(error);
  }
};
/**

 * retrive all orders and change where isApprovedByManager = "approved"
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const changeStatusToApproved = async (req, res) => {
  try {
    const approvedList = await Order.findOneAndUpdate(
      { isApprovedByOfficer: "approved", id: req.params.id },
      { isApprovedByManager: "approved" },
      { new: true }
    );
    res.status(200).json({ orders: approvedList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

 * retrieves all orders in the orders table
 * @param {Object} req
 * @param {Object} res
 * @returns res
 */
const getManagerApprovedOrders = async (req, res) => {
	try {
		const allOrders = await Order.find({siteManagerId: req.body.user, isApprovedByManager:"approved"});
		res.status(200).json({ orders: allOrders });
	} catch (error) {
		res.status(400).json({ message: error.message });
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
  getApproveOrders,
  changeStatusToRejected,
  changeStatusToApproved,
	allOrders,
	getOrdersOfSupplier,
	changeDeliveryStatusBySupplierAsPreparing,
	changeDeliveryStatusBySupplierAsDelivered,
	changeDeliveryStatusBySupplierAsDelivering,
	getManagerApprovedOrders
};
