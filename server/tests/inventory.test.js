const axios = require("axios");


describe("POST @ /Inventory endpoint", () => {
	it("should create a service and return id with response code 200", async () => {
		try{
			const res = axios.post("http://localhost:5000/api/v1/inventory", {
				item: "Sand",
				maxCapacity: 50,
				quantity:20
			});

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
            } catch (err) {
			console.log(err.response);
		}
		
	});
});

describe("GET @ /Inventory endpoint", () => {
	it("should create a service and return objects with response code 200", async () => {
		try{
			const res = axios.get("http://localhost:5000/api/v1/inventory");

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
            } catch (err) {
			console.log(err.response);
		}
		
	});
});




