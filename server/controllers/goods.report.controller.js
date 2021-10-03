const GoodsReport = require("../models/goods.report.model") 

const saveGoodsReport = async(req, res) => {
    try{
        const report = new GoodsReport(req.body)
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