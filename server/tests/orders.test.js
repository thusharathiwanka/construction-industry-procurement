describe("GET @ /orders endpoint", () => {
  it("should return array with site objects with response code 200", async () => {
    try {
      const res = axios.post("http://localhost:5000/api/v1/orders");

      expect(res.status).toEqual(200);
      expect(res.data).toEqual("Object");
    } catch (err) {
      console.log(err);
    }
  });
});
describe("GET @ /getAllOrdersByManager endpoint", () => {
  it("should return array with site objects with response code 200", async () => {
    try {
      const res = axios.post(
        "http://localhost:5000/api/v1/orders/getAllOrdersByManager"
      );

      expect(res.status).toEqual(200);
      expect(res.data).toEqual("Object");
    } catch (err) {
      console.log(err);
    }
  });
});

describe("GET @ /manager get Approved Orders endpoint", () => {
  it("should return array with site objects with response code 200", async () => {
    try {
      const res = axios.post(
        "http://localhost:5000/api/v1/orders/getApproveOrders"
      );

      expect(res.status).toEqual(200);
      expect(res.data).toEqual("Object");
    } catch (err) {
      console.log(err);
    }
  });
});
