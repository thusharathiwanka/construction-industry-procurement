import React, { useEffect, useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
// import Table from "../components/table/Table";
// import Spinner from "../components/loading/Spinner";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../assets/css/Usercreate.css";

const DeliveryReport = () => {
	const history = useHistory();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [button, setButton] = useState(false);
	const [newReport, setnewReport] = useState({
		item: "",
		description: "",
		quantity: "",
	});
	const saveReport = async (e) => {
		e.preventDefault();
		setButton(true);
		setnewReport({
			item: "",
			description: "",
			quantity: "",
		});
		try {
			newReport.createdAt = new Date();
			const res = await axios.post("/reports/saveDeliveryReport", newReport);

			setButton(false);
			console.log(newReport);
			window.alert("Delivery report Created successfully");
		} catch (err) {
			console.error(err.response.data.message);
			setError(err.response.data.message);
			setButton(false);
		}
	};
	return (
		<div>
			<Sidebar />
			<div id="main" className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<h1 className="page-header">Delivery Report</h1>
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
										<div className="row-user">
											<input
												type="text"
												placeholder="Item"
												value={newReport.item}
												onChange={(e) =>
													setnewReport({
														...newReport,
														item: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="row-user">
											<input
												type="email"
												placeholder="Description"
												value={newReport.description}
												onChange={(e) =>
													setnewReport({
														...newReport,
														description: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="row-user">
											<input
												type="number"
												placeholder="Quantity"
												value={newReport.quantity}
												onChange={(e) =>
													setnewReport({
														...newReport,
														quantity: e.target.value,
													})
												}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="row-user">
											<input type="date" placeholder="Created Date" required />
										</div>
									</div>
								</div>
								<div className="row-user">
									<button type="submit" onClick={saveReport}>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryReport;
