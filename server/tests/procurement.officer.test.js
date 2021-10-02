const axios = require("axios");

describe("POST @ /officers endpoint", () => {
	it("should create a procurement officer and return an id and type", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/officers", {
				name: "Thushara",
				email: "test@somemail.com",
				username: "thushara@sitemanager",
				phone: "9739825362",
				weeklyWorkHrs: 45,
				salary: 40000,
			});
			expect(res.status).toEqual(200);
			expect(res.data).toEqual("Object");
			expect(res.data.role).toEqual("officer");
		} catch (err) {
			console.log(err);
		}
	});
});

describe("POST @ /officers endpoint", () => {
	it("should return phone number is not valid with response code 400", async () => {
		try {
			const res = axios.post("http://localhost:5000/api/v1/officers", {
				name: "Thushara",
				email: "test@somemail.com",
				username: "thushara@sitemanager",
				phone: "97398253",
				weeklyWorkHrs: 45,
				salary: 40000,
			});

			expect(res.status).toEqual(400);
			expect(res.data.message).toEqual("Please enter a valid phone number");
		} catch (err) {
			console.log(err);
		}
	});
});
