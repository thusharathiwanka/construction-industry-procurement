const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_CONFIG_ACCOUNT,
		pass: process.env.EMAIL_CONFIG_PASSWORD,
	},
});

const sendMail = async (to, subject, html) => {
	try {
		await transporter.sendMail({
			from: {
				name: "WRK Procurement",
				address: "tthiwanka811@gmail.com",
			},
			to: to,
			subject: subject,
			html: html,
		});
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = sendMail;
