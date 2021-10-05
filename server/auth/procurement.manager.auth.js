const jwt = require("jsonwebtoken");

/**
 * use to authorize as procurement manager
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} res
 */
const verifyProcurementManagerAuth = (req, res, next) => {
	if (req.cookies) {
		try {
			const token = req.cookies.token;
			if (!token) return res.status(401).json({ message: "Unauthorized" });

			const verified = jwt.verify(token, process.env.JWT_SECRET);

			if (!verified.type === "manager")
				return res.status(401).json({ message: "Unauthorized" });

			req.body.user = verified.user;
			next();
		} catch (err) {
			console.error(err.message);
			return res.status(401).json({ message: "Unauthorized" });
		}
	}
};

module.exports = { verifyProcurementManagerAuth };
