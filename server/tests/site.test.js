const axios = require("axios");

describe("POST @ /sites endpoint", () => {
	it("should create a site and return id with response code 201", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/sites", {
				name: "Thushara",
				location: "Ward Place, Colombo",
				siteManagerId: "6158c4de3316d914c375441c",
			});

			expect(res.status).toEqual(201);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err.response);
		}
	});
});

describe("POST @ /sites endpoint", () => {
	it("should return fill all the fields with response code 400", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/sites", {
				name: "Thushara",
				location: "Ward Place, Colombo",
			});

			expect(res.status).toEqual(400);
			expect(res.data.message).toEqual("Please fill all the fields");
		} catch (err) {
			console.log(err);
		}
	});
});

describe("GET @ /sites endpoint", () => {
	it("should return array with site objects with response code 200", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/sites");

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err);
		}
	});
});
