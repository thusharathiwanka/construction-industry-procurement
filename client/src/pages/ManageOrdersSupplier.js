import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import Spinner from "../components/loading/Spinner";
import Error from "../components/toast/Error";

import "../assets/css/Usercreate.css";

const ManageOrdersSupplier = () => {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [orderDetails, setOrderDetails] = useState({
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
		"Item",
		"Quantity",
		"Total Price",
		"Delivery Address",
		"Received At",
		"Actions",
	];

	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const renderOrderBody = (item, index) => (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{item.itemName}</td>
			<td>{item.quantity}</td>
			<td>{item.total}</td>
			<td>{item.address}</td>
			<td>{new Date(item.updatedAt).toDateString()}</td>
			<td>
				<div className="rowuser" style={{ paddingTop: "0" }}>
					{item.DeliveryStatus === "pending" ? (
						<button style={{ padding: ".2rem 1rem", height: "30px" }}>
							Mark as preparing
						</button>
					) : item.DeliveryStatus === "preparing" ? (
						<button style={{ padding: ".2rem 1rem", height: "30px" }}>
							Mark as delivered
						</button>
					) : (
						<p>Delivered</p>
					)}
				</div>
			</td>
		</tr>
	);

	const getAllOrders = async () => {
		try {
			const res = await axios.get("orders/supplier");
			setOrderDetails(res.data.orders);
			console.log(res.data.orders);
			setIsLoading(false);
		} catch (err) {
			console.log(err.response);
		}
	};

	useEffect(() => getAllOrders(), []);

	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<h1 className="page-header">Manage Orders</h1>
					<div className="card">
						<h2>Received Orders</h2>
						{isLoading ? (
							<Spinner />
						) : orderDetails.length > 0 ? (
							<Table
								limit="5"
								headData={fields}
								renderHead={(item, index) => renderOrderHead(item, index)}
								bodyData={orderDetails}
								renderBody={(item, index) => renderOrderBody(item, index)}
							/>
						) : (
							<>
								{setError("No orders found")}
								<Error message={error} />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageOrdersSupplier;
