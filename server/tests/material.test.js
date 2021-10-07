const axios = require("axios");

describe("POST @ /materials endpoint", () => {
	it("should create a material and return id with response code 201", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/materials", {
				name: "Cement - Holcim",
				code: "C001",
			});

			expect(res.status).toEqual(201);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err.response);
		}
	});
});

describe("POST @ /materials endpoint", () => {
	it("should return fill all the fields with response code 400", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/materials", {
				name: "Cement - Holcim",
			});

			expect(res.status).toEqual(400);
			expect(res.data.message).toEqual("Please fill all the fields");
		} catch (err) {
			console.log(err);
		}
	});
});

describe("GET @ /materials endpoint", () => {
	it("should return array with material objects with response code 200", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/materials");

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err);
		}
	});
});
