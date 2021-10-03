import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import AdminGreeting from "../assets/images/admin-greeting.png";
import Badge from "../components/badge/Badge";
import "../components/badge/badge.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import profilePicture from "../assets/images/admin-user-img.jpg";

const AdminDashboard = () => {
	const [value, onChange] = useState(new Date());
	const fields = ["", "Date", "Item", "Quantity", "Status", "Actions"];
	const rows = [
		{
			id: "1",
			date: "2021.08.06",
			houseOwner: "Gayath Chandula",
			providence: "Pool",
			status: "Approved",
		},
		{
			id: "2",
			date: "2021.08.06",
			houseOwner: "Gayath Chandula",
			providence: "Pool",
			status: "Pending",
		},
		{
			id: "3",
			date: "2021.08.06",
			houseOwner: "Gayath Chandula",
			providence: "Pool",
			status: "Declined",
		},
		{
			id: "4",
			date: "2021.08.06",
			houseOwner: "Gayath Chandula",
			providence: "Pool",
			status: "Pending",
		},
		{
			id: "4",
			date: "2021.08.06",
			houseOwner: "Gayath Chandula",
			providence: "Pool",
			status: "Pending",
		},
		{
			id: "4",
			date: "2021.08.06",
			houseOwner: "Gayath Chandula",
			providence: "Pool",
			status: "Pending",
		},
	];

	const permissionStatus = {
		Pending: "warning",
		Approved: "success",
		Declined: "danger",
	};

	const deleteHandler = (id) => {
		console.log(id);
	};

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{item.date}</td>
			<td>{item.houseOwner}</td>
			<td>{item.providence}</td>
			<td>
				<Badge type={permissionStatus[item.status]} content={item.status} />
			</td>
			<td className="">
				{item.status === "Pending" && (
					<>
						<button className="action-btn check">
							<i className="bx bx-check"></i>
						</button>
						<button className="action-btn x">
							<i
								className="bx bx-x"
								onClick={() => {
									if (window.confirm("Are you sure to delete this request?")) {
										deleteHandler(item.id);
									}
								}}
							></i>
						</button>
					</>
				)}
			</td>
		</tr>
	);

	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<div className="row">
						<div className="col-8 full-width">
							<div className="card greeting-card">
								<div className="row">
									<div className="col-8 flex-column">
										<h1 className="page-header">Good Morning! </h1>
										<h3>Today you have 9 new notifications</h3>
										<h3>Also new booking appointments for approval</h3>
										<Link className="read-more">
											Read more <i className="bx bx-right-arrow-alt"></i>
										</Link>
									</div>
									<div className="col-4">
										<img
											className="admin-greeting"
											src={AdminGreeting}
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4 full-width">
							<div className="card">
								<h2
									className="request-title"
									style={{ color: "transparent", marginBottom: "-.2rem" }}
								>
									Calender
								</h2>
								<Calendar
									className="calender"
									onChange={onChange}
									value={value}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-8">
							<div className="card">
								<div className="flex">
									<h2 className="request-title">Registered Users</h2>
									<Link>
										<button className="view-btn">View All</button>
									</Link>
								</div>
								<Table
									limit="5"
									headData={fields}
									renderHead={(item, index) => renderOrderHead(item, index)}
									bodyData={rows}
									renderBody={(item, index) => renderOrderBody(item, index)}
								/>
							</div>
						</div>
						<div className="col-4">
							<div className="card">
								<div className="row">
									<div className="col-4 full-width-1496">
										<img
											src={profilePicture}
											alt=""
											className="profile-picture"
										/>
									</div>
									<div className="col-8">
										<h2>Thushara Thiwanka</h2>
										<h3 className="lighter">MANAGER</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
