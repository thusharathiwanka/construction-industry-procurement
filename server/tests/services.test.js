const axios = require("axios");

describe("POST @ /services endpoint", () => {
	it("should create a service and return id with response code 201", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/services", {
				materialId: "615a249880e3f21df5c07999",
				units: 50,
				pricePerUnit: 400,
				supplierId: "615a38f008920a208f609301",
			});

			expect(res.status).toEqual(201);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err.response);
		}
	});
});

describe("POST @ /services endpoint", () => {
	it("should return fill all the fields with response code 400", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/services", {
				materialId: "615a249880e3f21df5c07999",
				units: 50,
			});

			expect(res.status).toEqual(400);
			expect(res.data.message).toEqual("Please fill all the fields");
		} catch (err) {
			console.log(err);
		}
	});
});

describe("GET @ /services endpoint", () => {
	it("should return array with service objects with response code 200", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/services");

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err);
		}
	});
});

describe("GET @ /services/my endpoint", () => {
	it("should return array with service objects of specific supplier with response code 200", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/services", {
				user: "615a38f008920a208f609301",
			});

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err);
		}
	});
});

describe("DELETE @ /services/:id endpoint", () => {
	it("should delete the service and return id with response code 200", async () => {
		try {
			const res = axios.delete(
				"http://localhost:5000/api/v1/services/615b515ccc50fda74697af5d"
			);

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
		} catch (err) {
			console.log(err);
		}
	});
});
