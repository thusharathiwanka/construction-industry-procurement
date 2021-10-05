import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Spinner from "../components/loading/Spinner";

import "../assets/css/Usercreate.css";

const ManageOrdersSupplier = () => {
	const [error, setError] = useState("");
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
	const fields = [
		"",
		"Employee Name",
		"Email",
		"Username",
		"Phone",
		"Weekly Work Hrs",
		"Salary",
	];

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{item.name}</td>
			<td>{item.email}</td>
			<td>{item.username}</td>
			<td>{item.phone}</td>
			<td>{item.weeklyWorkHrs}</td>
			<td>{item.salary}</td>
		</tr>
	);

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
					<h1 className="page-header">Manage Orders</h1>
					<div className="card">
						<h2>Order Details</h2>
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

export default ManageOrdersSupplier;
