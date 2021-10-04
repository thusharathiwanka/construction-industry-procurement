import React from "react";
import Checkbox from "react-simple-checkbox";

const AssignSupplier = () => {
	return (
		<div>
			<form>
				<div className="row card col-6">
					<div className="col-4 ">
						<div className="rowuser">
							<Checkbox
								colour={"#4A4A4A"}
								size={3}
								tickSize={2}
								checked={true}
							/>
							<p style={{ fontSize: "24px", marginLeft: "120px" }}>Sand</p>
						</div>
					</div>
					<div className="col-5 ">
						<div className="rowuser">
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
