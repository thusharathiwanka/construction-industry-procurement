import axios from "axios";
import React, { useEffect, useState } from "react";

const AssignSupplier = ({ item, sitemng, materialId }) => {
	const [supliers, setSupliers] = useState([]);
	const [supplierId, setSupplierId] = useState({
		supplierId: "",
	});

	const getSuppliers = async () => {
		let id = materialId;
		console.log(materialId);
		console.log(id);
		try {
			const res = await axios.get(`/suppliers/services/${id}`);
			setSupliers(res.data.supplierlist);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(supliers);

	const addSuplier = (supplierId) => {
		console.log(supplierId);
		let id = materialId;
		try {
			const res = axios.put(`/orders/${id}`, supplierId);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSuppliers();
	}, []);

	return (
		<div style={{ width: "400px", height: "200px" }}>
			<form>
				<div className="row card ">
					<div className=" ">
						<div className="row-user">
							<p
								style={{
									fontSize: "24px",
									marginLeft: "32px",
									marginRight: "15px",
									marginTop: "1px",
								}}
							>
								{item}
							</p>
						</div>
					</div>
					<div className=" ">
						<div className="rowuser">
							<select
								name="site"
								id="site"
								onChange={(e) => setSupplierId(e.target.value)}
								required
							>
								<option value="site" defaultValue>
									SELECT SUPPLIER
								</option>
								{supliers.map((suplier) => (
									<option value={suplier.supplierId} key={suplier._id}>
										{suplier.supplierId.name + " " + suplier.pricePerUnit}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<button
					type="submit "
					onClick={() => {
						addSuplier(supplierId);
					}}
				>
					Add supplier
				</button>
			</form>
		</div>
	);
};

export default AssignSupplier;
