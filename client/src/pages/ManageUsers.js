import React, { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";

import profilePicture from "../assets/images/admin-greeting.png";

import "../assets/css/Usercreate.css";

const ManageUsers = () => {
	const [employeeDetails, setEmployeeDetails] = useState({});
	const fields = [
		"ID",
		"Worker Name",
		"Emergency Mobile",
		"Hired Company",
		"weeklyWorkHours",
		"Shift",
		"phone",
		"username",
		"Date",
	];

	const rows = [
		{
			id: 1,
			name: "Gayath",
			email: "077777777",
			salary: "Company 1",
			username: "90000000000",
			weeklyWorkHours: "Gardening",
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
			weeklyWorkHours: "Gardening",
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
			weeklyWorkHours: "Gardening",
			shift: "Morning-Shift",
			phone: "00038434343",
			date: "2021.08.06",
		},
	];

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.email}</td>
			<td>{item.salary}</td>
			<td>{item.weeklyWorkHours}</td>
			<td>{item.shift}</td>
			<td>{item.phone}</td>
			<td>{item.username}</td>
			<td>{item.date}</td>
		</tr>
	);

	const saveEmployeeDetails = (e) => {
		e.preventDefault();
		console.log(employeeDetails);
		setEmployeeDetails({
			name: "",
			email: "",
			username: "",
			position: "",
			phone: "",
			weeklyWorkHours: "",
			salary: "",
		});
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
							<form className="card" onSubmit={saveEmployeeDetails}>
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
												value={employeeDetails.weeklyWorkHours}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														weeklyWorkHours: e.target.value,
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
												name="shift"
												id="shift"
												placeholder="Select employee type"
												value={employeeDetails.shift}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														shift: e.target.value,
													})
												}
												required
											>
												<option value="sitemanager" default disabled>
													Select employee type
												</option>
												<option value="sitemanager" default>
													Site Manager
												</option>
												<option value="officer">Procurement Officer</option>
											</select>
										</div>
									</div>
									<div className="col-6">
										<div className="rowuser">
											<input
												type="date"
												placeholder=""
												value={employeeDetails.date}
												onChange={(e) =>
													setEmployeeDetails({
														...employeeDetails,
														date: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
								</div>
								<div className="rowuser">
									<button type="submit">Save</button>
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
