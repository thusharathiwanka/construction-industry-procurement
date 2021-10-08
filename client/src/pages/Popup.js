import React from "react";
import AssignSupplier from "./Assign";
import { AiOutlineClose } from "react-icons/ai";
import Rejection from "./Rejection";
import GoodsReceipt from "./GoodsReceipt";
import RejectReason from "./RejectReason";

function Popup(props) {
	console.log(props);
	return props.trigger ? (
		<div className="Popupout">
			<div className="Popupin">
				<AiOutlineClose
					onClick={() => props.setTrigger(false)}
					className="closeIcone "
				/>
				{props.name === "Assign" ? (
					<AssignSupplier
						item={props.order}
						sitemng={props.sitemng}
						materialId={props.materialId}
						orderId={props.orderId}
					/>
				) : props.name === "Rejection" ? (
					<Rejection description={props.description} />
<<<<<<< HEAD
				) : props.name === "GoodsReceipt" ? (
					<GoodsReceipt />
				) : props.name === "rejectReason" ? (
					<RejectReason orderId={props.orderId} />
				) : (
					""
				)}
=======
				): props.name === "GoodsReceipt" ? (
					<GoodsReceipt item={props.item} id={props.id} />
				):""}
>>>>>>> 9d7f280276a391190968b5cea0029e34309a2c16
			</div>
		</div>
	) : (
		<div></div>
	);
}

export default Popup;
