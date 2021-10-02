import React, { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";

import "../assets/css/Usercreate.css";
import axios from "axios";

const ManageUsers = () => {
	const [employeeDetails, setEmployeeDetails] = useState({
		name: "",
		email: "",
		username: "",
		position: "sitemanager",
		phone: "",
		weeklyWorkHrs: "",
		salary: "",
	});
	const fields = [
		"",
		"Employee Name",
		"Email",
		"Username",
		"Phone",
		"Weekly Work Hrs",
		"Position",
		"Salary",
	];

	const rows = [
		{
			id: 1,
			name: "Gayath",
			email: "077777777",
			salary: "Company 1",
			username: "90000000000",
			weeklyWorkHrs: "Gardening",
			shift: "Morning-Shift",
			phone: "00038434343",
			date: "2021.08.06",
		},
		{
			id: 2,
			name: "Gayath",
			email: "077777777",
			salary: "Company 2",
			username: "90000000000",
			weeklyWorkHrs: "Gardening",
			shift: "Morning-Shift",
			phone: "00038434343",
			date: "2021.08.06",
		},
		{
			id: 3,
			name: "Gayath",
			email: "077777777",
			salary: "Company 3",
			username: "90000000000",
			weeklyWorkHrs: "Gardening",
			shift: "Morning-Shift",
			phone: "00038434343",
			date: "2021.08.06",
		},
	];

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index}</td>
			<td>{item.name}</td>
			<td>{item.email}</td>
			<td>{item.username}</td>
			<td>{item.phone}</td>
			<td>{item.weeklyWorkHrs}</td>
			<td>{item.position}</td>
			<td>{item.salary}</td>
		</tr>
	);

	const saveEmployeeDetails = async (e) => {
		e.preventDefault();
		let endpoint;

		if (employeeDetails.position === "sitemanager") {
			endpoint = "sitemanagers";
		} else if (employeeDetails.position === "officers") {
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
				position: "",
				phone: "",
				weeklyWorkHrs: "",
				salary: "",
			});
		} catch (err) {
			console.log(err.response);
		}
	};

	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<h1 className="page-header">Manage Users</h1>
					<div className="row">
						<div className="col-12">
							<form className="card">
								<div className="row">
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Employee Name"
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
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Mobile Number"
												value={employeeDetails.phone}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														phone: e.target.value,
													})
												}
												required
												maxLength="10"
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Username"
												value={employeeDetails.username}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														username: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Weekly Work Hours"
												value={employeeDetails.weeklyWorkHrs}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														weeklyWorkHrs: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="text"
												placeholder="Salary"
												value={employeeDetails.salary}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														salary: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<select
												name="position"
												id="position"
												value={employeeDetails.position}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														position: e.target.value,
													})
												}
												required
											>
												<option value="sitemanager">Site Manager</option>
												<option value="officer">Procurement Officer</option>
											</select>
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
						<h2>Worker Details</h2>
						<Table
							limit="5"
							headData={fields}
							renderHead={(item, index) => renderOrderHead(item, index)}
							bodyData={rows}
							renderBody={(item, index) => renderOrderBody(item, index)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageUsers;
