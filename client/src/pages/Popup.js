import React from "react";
import AssignSupplier from "./Assign";
import { AiOutlineClose } from "react-icons/ai";
import Rejection from "./Rejection";
import GoodsReceipt from "./GoodsReceipt";
import RejectReason from "./RejectReason";

function Popup(props) {
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
						total={props.total}
					/>
				) : props.name === "Rejection" ? (
					<Rejection description={props.description} />
				) : props.name === "GoodsReceipt" ? (
					<GoodsReceipt id={props.id} />
				) : props.name === "rejectReason" ? (
					<RejectReason description={props.description} />
				) : (
					""
				)}
			</div>
		</div>
	) : (
		<div></div>
	);
}

export default Popup;