const axios = require("axios");

describe("GET @ /deliveryReport endpoint", () => {
	it("should create a service and return object with response code 200", async () => {
		try{
			const res = axios.get("http://localhost:5000/api/v1/reports/deliveryreport/615b41d13ff3ade0f7743059");

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
            } catch (err) {
			console.log(err.response);
		}
		
	});
});

describe("GET @ /deliveryReports endpoint", () => {
	it("should create a service and return object with response code 200", async () => {
		try{
			const res = axios.get("http://localhost:5000/api/v1/reports/goodsreport");

			expect(res.status).toEqual(200);
            expect(res.data).toEqual("Object");
            } catch (err) {
			console.log(err.response);
		}
		
	});
});