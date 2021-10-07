const GoodsReport = require("../models/goods.report.model") 

const saveGoodsReport = async(req, res) => {
    try{
        const report = new GoodsReport({
            orderId :req.body.orderId,
            item :req.body.item,
            quantity :req.body.quantity,
            receivedDate :req.body.receivedDate,
        })
        await report.save();
        res.status(200).json(report._id)
    } catch (error) {
		res.status(400);
		console.log(error);
	}
}

const updateGoodsReport = async(req, res) => {
    try{
        const report = new GoodsReport(req)
        await report.save();
        res.status(200).json(report._id)
    } catch (error) {
		res.status(400);
		console.log(error);
	}
}

const getGoodsReport = async(req, res)  => {
    try{
        const report = await GoodsReport.findById(req.params.id)
        res.status(200).json(report)
    } catch (error) {
		res.status(400);
		console.log(error);
	}
}

module.exports = {
    saveGoodsReport,
    getGoodsReport
}