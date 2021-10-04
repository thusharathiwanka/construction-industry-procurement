import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

const OfficerOrders = () => {
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

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{item.id}</td>
			<td>{item.date}</td>
			<td>{item.houseOwner}</td>
			<td>{item.providence}</td>
			<td>
				<Badge type={permissionStatus[item.status]} content={item.status} />
			</td>
			<td>
				<button className="item-accept">accept</button>
				<button className="item-reject">reject</button>
				<button className="item-assign">assign</button>
			</td>
		</tr>
	);
	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
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
	);
};

export default OfficerOrders;
