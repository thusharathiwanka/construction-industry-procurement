import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Spinner from "../components/loading/Spinner";

import "../assets/css/Usercreate.css";

const ManageServices = () => {
	const [error, setError] = useState("");
	const [btnState, setBtnState] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [employees, setEmployees] = useState(true);
	const [services, setServices] = useState([]);
	const [materials, setMaterials] = useState([]);
	const [serviceDetails, setServiceDetails] = useState({
		material: "",
		unit: "",
	});
	const fields = ["", "Material ", "Unit"];

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{item.name}</td>
			<td>{item.email}</td>
		</tr>
	);

	const saveServiceDetails = async (e) => {
		e.preventDefault();
		setBtnState(true);

		for (let key of Object.keys(serviceDetails)) {
			if (!serviceDetails[key]) {
				setBtnState(false);
				return setError("Please fill all the fields");
			}
		}

		try {
			const res = await axios.post("supplier/services", serviceDetails);
			console.log(res);
			setServiceDetails({
				material: "",
				unit: "",
			});
			setError("");
			window.alert("Service registered successfully");
			setBtnState(false);
			setIsLoading(true);
		} catch (err) {
			setBtnState(false);
			console.log(err.response);
		}
	};

	const getAllData = async () => {
		try {
			const res1 = await axios.get(`suppliers/services`);
			const res2 = await axios.get(`materials`);
			setEmployees(res1.data.services);
			setMaterials(res2.data.materials);
			console.log(res2.data.materials);
			setIsLoading(false);
		} catch (err) {
			console.log(err.response);
		}
	};

	useEffect(() => getAllData(), []);

	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<h1 className="page-header">Manage Services</h1>
					<div className="row">
						<div className="col-12">
							<form className="card" style={{ position: "relative" }}>
								{error && (
									<div className="error-bg" style={{ left: "3%" }}>
										<p>{error}</p>
									</div>
								)}
								<div className="row">
									<div className="col-6">
										<div className="rowuser">
											<select
												name="site"
												id="site"
												value={serviceDetails.material}
												onChange={(e) =>
													setServiceDetails({
														...serviceDetails,
														material: e.target.value,
													})
												}
												required
											>
												<option value="site" defaultValue>
													SELECT MATERIAL
												</option>
												{materials.length > 0 &&
													materials.map((material) => (
														<option value={material._id}>
															{material.name}
														</option>
													))}
											</select>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Units"
												value={serviceDetails.unit}
												onChange={(e) =>
													setServiceDetails({
														...serviceDetails,
														unit: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
								</div>
								<div className="rowuser">
									<button type="submit" onClick={saveServiceDetails}>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="card">
						<h2>Employee Details</h2>
						{isLoading ? (
							<Spinner />
						) : (
							<Table
								limit="5"
								headData={fields}
								renderHead={(item, index) => renderOrderHead(item, index)}
								bodyData={employees}
								renderBody={(item, index) => renderOrderBody(item, index)}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageServices;
