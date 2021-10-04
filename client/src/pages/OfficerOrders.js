import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";
import axios from "axios";

const OfficerOrders = () => {
	const fields = [
		"",
		"Order ID",
		"Quantity",
		"Total",
		"Created Date",
		"Status",
		"Actions",
	];
	const deleteHandler = (id) => {
		console.log(id);
	};
	const [orders, setOrders] = useState(null);
	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{item.orderItem}</td>
			<td>{item.quantity}</td>
			<td>{item.total}</td>
			<td>{new Date(item.createdAt).toLocaleDateString()}</td>
			<td>
				<Badge
					type={permissionStatus[item.DeliveryStatus]}
					content={item.DeliveryStatus}
				/>
			</td>
			<td>
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
				<button className="action-btn item-assign ">
					<i class="bx bxs-user-plus"></i>
				</button>
			</td>
		</tr>
	);
	const getAllOrder = async () => {
		const res = await axios.get("orders/");

		console.log(res.data.orders);
		setOrders(res.data.orders);
	};
	console.log(orders);

	useEffect(() => {
		getAllOrder();
	}, []);

	const permissionStatus = {
		pending: "warning",
		Approved: "success",
		Declined: "danger",
	};

	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					{orders && (
						<Table
							limit="5"
							headData={fields}
							renderHead={(item, index) => renderOrderHead(item, index)}
							bodyData={orders}
							renderBody={(item, index) => renderOrderBody(item, index)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default OfficerOrders;
