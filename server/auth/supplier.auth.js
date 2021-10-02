const jwt = require("jsonwebtoken");

/**
 * use to authorize as supplier
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} res
 */
const verifySupplierAuth = (req, res, next) => {
	if (req.cookies) {
		try {
			const token = req.cookies.token;
			if (!token) return res.status(401).json({ message: "Unauthorized" });

			const verified = jwt.verify(token, process.env.JWT_SECRET);

			if (!verified.type === "supplier")
				return res.status(401).json({ message: "Unauthorized" });

			next();
		} catch (err) {
			console.error(err.message);
			return res.status(401).json({ message: "Unauthorized" });
		}
	}
};

module.exports = { verifySupplierAuth };
