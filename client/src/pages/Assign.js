import axios from "axios";
import React, { useEffect, useState } from "react";

const AssignSupplier = ({ item, sitemng, materialId, orderId }) => {
	const [supliers, setSupliers] = useState([]);
	const [supplierId, setSupplierId] = useState("");

	const getSuppliers = async () => {
		let id = materialId;
		// console.log(materialId);
		// console.log(id);
		try {
			const res = await axios.get(`/suppliers/services/${id}`);
			setSupliers(res.data.supplierlist);
		} catch (error) {
			console.log(error);
		}
	};
	// console.log(supliers);
	// console.log(supplierId);
	// console.log(orderId);
	const addSuplier = async (e) => {
		// e.preventDefault();
		// console.log("sup", supplierId);
		// console.log("mat", materialId);
		let id = orderId;
		try {
			const res = await axios.put(`/orders/${id}`, { supplierId: supplierId });
			// console.log(res);
			window.alert("Supplier ID  added successfully");
			window.location.reload();
		} catch (error) {
			console.log(error.response);
		}
	};

	// console.log(supplierId);
	useEffect(() => {
		getSuppliers();
	}, []);

	return (
		<div>
			<div className="layout__content-main">
				<h1 className="page-header">Add Supplier</h1>
				<div className="row">
					<div className="col-12">
						<div className="row-user">
							<p className="page-header" style={{ size: "20px" }}>
								{item}
							</p>
						</div>

						<form
							className="card"
							style={{ position: "relative" }}
							onSubmit={addSuplier}
						>
							<div className="col-2"></div>
							<div className="col-6">
								<div className="row-user">
									<select
										name="site"
										id="site"
										onChange={(e) => {
											setSupplierId(e.target.value);
											console.log(e.target.value);
											console.log(supplierId);
										}}
										required
									>
										<option value="site">SELECT SUPPLIER</option>
										{supliers.map((suplier) => (
											<option value={suplier.supplierId._id} key={suplier._id}>
												{suplier.supplierId.name + " " + suplier.pricePerUnit}
											</option>
										))}
									</select>
								</div>
							</div>

							<div className="row-user">
								<button type="submit">Add supplier</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssignSupplier;
