const axios = require("axios");

describe("GET @ /GoodsReports endpoint", () => {
	it("should create a service and return objects with response code 200", async () => {
		try{
			const res = axios.get("http://localhost:5000/api/v1/reports/goodsreport");

			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
            } catch (err) {
			console.log(err.response);
		}
		
	});
});

describe("POST @ /GoodsReports endpoint", () => {
	it("should return response code 400", async () => {
		try{
			const res = axios.post("http://localhost:5000/api/v1/reports/goodsreport", {
				
			});

			expect(res.status).toEqual(400);
            } catch (err) {
			console.log(err.response);
		}
		
	});
});