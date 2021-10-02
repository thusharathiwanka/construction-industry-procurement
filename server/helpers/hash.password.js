const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);

	try {
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
	} catch (err) {
		return console.log(err.message);
	}
};

module.exports = hashPassword;
