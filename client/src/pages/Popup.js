import React from "react";
import AssignSupplier from "./Assign";
import { AiOutlineClose } from "react-icons/ai";

function Popup(props) {
	console.log(props);
	return props.trigger ? (
		<div className="Popupout">
			<div className="Popupin">
				<AiOutlineClose
					onClick={() => props.setTrigger(false)}
					className="closeIcone"
				/>
				<AssignSupplier item={props.order} sitemng={props.sitemng} />
			</div>
		</div>
	) : (
		<div></div>
	);
}

export default Popup;
