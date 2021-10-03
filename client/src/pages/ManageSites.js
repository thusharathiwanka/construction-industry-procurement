import React, { useEffect, useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Spinner from "../components/loading/Spinner";

import "../assets/css/Usercreate.css";
import axios from "axios";

const ManageUsers = () => {
	const [error, setError] = useState("");
	const [btnState, setBtnState] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [employees, setEmployees] = useState(true);
	const [site, setSite] = useState({
		name: "",
		location: "",
		siteManagerId: "",
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

	const saveSite = async (e) => {
		e.preventDefault();
		let endpoint;

		e.preventDefault();
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		setBtnState(true);

		for (let key of Object.keys(site)) {
			if (!site[key]) {
				setBtnState(false);
				return setError("Please fill all the fields");
			}
		}

		try {
			const res = await axios.post(endpoint, site);
			console.log(res);
			setSite({
				name: "",
				location: "",
			});
			setError("");
			window.alert("Site registered successfully");
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
					<h1 className="page-header">Manage Sites</h1>
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
												placeholder="Site Name"
												value={site.name}
												onChange={(e) =>
													setSite({
														...site,
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
												type="text"
												placeholder="Site Location"
												value={site.location}
												onChange={(e) =>
													setSite({
														...site,
														location: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
								</div>
								<div className="rowuser">
									<button type="submit" onClick={saveSite}>
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

export default ManageUsers;
