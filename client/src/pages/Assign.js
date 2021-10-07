import axios from "axios";
import React, { useEffect, useState } from "react";
import Checkbox from "react-simple-checkbox";

const AssignSupplier = ({ item, sitemng }) => {
	const [state, setState] = React.useState({
		one: true,
		two: false,
		three: false,
		four: false,
		five: false,
	});
	const [supliers, setSupliers] = useState([]);
	const getSuppliers = async (id) => {
		let user = sitemng;
		console.log(user);
		try {
			const res = await axios.get(`orders/supplier/${id}`, user);
			setSupliers(res.data.orders);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSuppliers();
	}, []);

	return (
		<div style={{ width: "400px", height: "200px" }}>
			<form>
				<div className="row card ">
					<div className=" ">
						<div className="row-user">
							<p
								style={{
									fontSize: "24px",
									marginLeft: "32px",
									marginRight: "50px",
									marginTop: "20px",
								}}
							>
								{item}
							</p>
						</div>
					</div>
					<div className=" ">
						<div className="row-user">
							<select name="" id="">
								<option>Suplier 01</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AssignSupplier;
