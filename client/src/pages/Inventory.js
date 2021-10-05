import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import Table from "../components/table/Table";
import { Link } from "react-router-dom";
import Badge from "../components/badge/Badge";

const Inventory = () => {
	const fields = ["", "Date", "Item", "Quantity", "Status", "Maximum Capacity"];
	const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

	const [Inventory, setInventory] = useState({
		item: "Sand",
		maxCapacity: 0,
	});
	const [InventoryDetails, setInventoryDetails] = useState("");

	useEffect(() => {
		const FetchData = async () => {
			const res = await axios.get("/inventory", Inventory);
			setInventoryDetails(res.data);
			console.log(res.data);
		};
		FetchData();
	}, []);

	const inventoryHandler = async () => {
		try {
			console.log(Inventory);
			const res = await axios.patch("/inventory/update", Inventory);
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
					<h1 className="page-header">Manage Inventory</h1>
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
												value={Inventory.item}
												onChange={(e) =>
													setInventory({ ...Inventory, item: e.target.value })
												}
												required
											>
												<option value="sand">Sand</option>
												<option value="cement">Cement</option>
												<option value="stone">Stone</option>
												<option value="iron">Iron</option>
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
												min="1"
												placeholder="Capacity"
												onChange={(e) =>
													setInventory({
														...Inventory,
														maxCapacity: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
								</div>
								<div style={{ paddingTop: 50 }}>
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
												<button type="submit" onClick={inventoryHandler}>
													Update
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-2"></div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="flex">
									<h2 className="request-title">All Orders</h2>
								</div>
								<Table
									// limit="5"
									headData={fields}
									renderHead={(item, index) => renderOrderHead(item, index)}
									// bodyData={rows}
									// renderBody={(item, index) => renderOrderBody(item, index)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inventory;
