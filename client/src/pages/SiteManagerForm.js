import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import { Link } from "react-router-dom";
import Badge from "../components/badge/Badge";
import DatePicker from "react-datepicker";

const SiteManagerForm = () => {
	const siteId = localStorage.getItem("site");
	const [Materials, setMaterials] = useState([]);
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
	const [Order, setOrder] = useState({
		item: {},
		quantity: 0,
		siteid: siteId,
		requiredDate:"",
		urgentOrder:false
	});
	console.log(Order);

	useEffect(() => {
		const FetchData = async () => {
			const res = await axios.get(`materials`);
			setMaterials(res.data.materials);
		};
		FetchData();
	}, []);
	const deleteHandler = (id) => {
		console.log(id);
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

	const orderHandler = async () => {
		try {
			console.log(Order);
			const res = await axios.post("/orders", Order);
		} catch (Err) {
			console.log(Err.response);
		}
	};
	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<h1 className="page-header">Manage Requisition</h1>
					<div className="row ">
						<div className="col-12">
							<div className="card">
								<div className="row ">
									<div className="col-2">
										<h3
											style={{
												paddingTop: 28,
												display: "flex",
												whiteSpace: "nowrap",
												paddingLeft: "25px",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}
										>
											Select Item
										</h3>
									</div>
									<div className="col-4">
										<div className="row-user">
											<select
												name="position"
												id="position"
												value={Order.item.id}
												onChange={(e) => {
													setOrder({
														...Order,
														item: {
															id: e.target.value,
															name: e.target.options[e.target.selectedIndex]
																.text,
														},
													});
													console.log(e);
												}}
												required
											>
												{Materials.length > 0 &&
													Materials.map((material) => (
														<option value={material._id}>
															{material.name}
														</option>
													))}
											</select>
										</div>
									</div>
									<div className="col-2">
										<h3
											style={{
												paddingTop: 28,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}
										>
											Quantity
										</h3>
									</div>
									<div className="col-4">
										<div className="row-user">
											<input
												type="number"
												min="0"
												placeholder="Quantity"
												onChange={(e) =>
													setOrder({ ...Order, quantity: e.target.value })
												}
												required
											/>
										</div>
									</div>
								</div>
								<div className="row ">
									<div className="col-2">
										<h3
											style={{
												paddingTop: 28,
												display: "flex",
												whiteSpace: "nowrap",
												paddingLeft: "55px",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}
										>
											Required Date
										</h3>
									</div>
									<div className="col-4">
										<div className="row-user">
										<input type='date'  onChange={(e) =>{ setOrder({ ...Order, requiredDate: e.target.value })
									console.log(Order.requiredDate);}} />
											
										</div>
									</div>
								</div>
								<div className="row ">
									<div style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}>
									<div className="row-user" style={{display:'inline',paddingTop: 30 }} >
										
										<input type="checkbox" onChange={(e)=>{setOrder({ ...Order, urgentOrder:!Order.urgentOrder})
									console.log(Order.urgentOrder);}} style={{width:17, height:17, display:'inline'}} />
										<h4 style={{ marginLeft:12,display:'inline'}}>Urgent Order</h4>
										</div>
									</div>
								</div>
								<div style={{ paddingTop: 10 }}>
									<div className="row ">
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}
										>
											<div className="row-user">
												<button type="submit " onClick={orderHandler}>
													Add
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-8">
							<div className="card">
								<div className="flex">
									<h2 className="request-title">All Orders</h2>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default SiteManagerForm;
