import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Spinner from "../components/loading/Spinner";

import "../assets/css/Usercreate.css";

const ManageServices = () => {
	const [error, setError] = useState("");
	const [orderDetails, setOrderDetails] = useState({});
	const [selectedFoods, setSelectedFoods] = useState([]);
	const [btnState, setBtnState] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [employees, setEmployees] = useState(true);
	const [employeeDetails, setEmployeeDetails] = useState({
		name: "",
		email: "",
		username: "",
		position: "sitemanager",
		phone: "",
		weeklyWorkHrs: "",
		salary: "",
		site: "",
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

	const saveEmployeeDetails = async (e) => {
		e.preventDefault();
		let endpoint;

		e.preventDefault();
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		setBtnState(true);

		for (let key of Object.keys(employeeDetails)) {
			if (!employeeDetails[key]) {
				setBtnState(false);
				return setError("Please fill all the fields");
			}
		}

		if (!employeeDetails.email.match(pattern)) {
			setBtnState(false);
			return setError("Please use valid email address");
		}

		if (employeeDetails.phone.length !== 10) {
			setBtnState(false);
			return setError("Please use valid phone number");
		}

		if (employeeDetails.site === "sitemanager") {
			endpoint = "sitemanagers";
		} else if (employeeDetails.site === "officers") {
			endpoint = "officers";
		}
		console.log(employeeDetails);

		try {
			const res = await axios.post(endpoint, employeeDetails);
			console.log(res);
			setEmployeeDetails({
				name: "",
				email: "",
				username: "",
				site: "",
				phone: "",
				weeklyWorkHrs: "",
				salary: "",
			});
			setError("");
			window.alert("House owner registered successfully");
			setBtnState(false);
			setIsLoading(true);
		} catch (err) {
			setBtnState(false);
			console.log(err.response);
		}
	};

	const getAllEmployees = async () => {
		try {
			const res = await axios.get(`users/`);
			setEmployees(res.data.employees);
			console.log(res.data.employees);
			setIsLoading(false);
		} catch (err) {
			console.log(err.response);
		}
	};

	useEffect(() => getAllEmployees(), []);

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
											<input
												type="text"
												placeholder="Material Name"
												value={employeeDetails.name}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														name: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="email"
												placeholder="Employee Email"
												value={employeeDetails.email}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														email: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
								</div>
								<div className="rowuser">
									<button type="submit" onClick={saveEmployeeDetails}>
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
