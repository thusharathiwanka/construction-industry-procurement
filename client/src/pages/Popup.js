import React from "react";
import AssignSupplier from "./Assign";
import { AiOutlineClose } from "react-icons/ai";
import Rejection from "./Rejection";
import GoodsReceipt from "./GoodsReceipt";

function Popup(props) {
	console.log(props);
	return props.trigger ? (
		<div className="Popupout">
			<div className="Popupin">
				<AiOutlineClose
					onClick={() => props.setTrigger(false)}
					className="closeIcone "
					
				/>
				{props.name === "Assign" ? (<AssignSupplier
					item={props.order}
					sitemng={props.sitemng}
					materialId={props.materialId}
				/> ): props.name === "Rejection" ? (
					<Rejection description={props.description} />
				): props.name === "GoodsReceipt" ? (
					<GoodsReceipt item={props.item} id={props.id} />
				):""}
			</div>
		</div>
	) : (
		<div></div>
	);
}

export default Popup;
