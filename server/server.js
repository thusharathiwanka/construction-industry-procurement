const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
	.connect(process.env.CONNECTION_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`connected to mongodb and started listening on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error(err.message);
	});

app.get("/", (req, res) => {
	res.send("<h3>Procurement Construction Industry API</h3>");
});
