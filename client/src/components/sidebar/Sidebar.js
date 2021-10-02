import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/images/logo.png";
import tinyLogo from "../../assets/images/logo-only.png";
import SidebarItem from "./SidebarItem";
import {
	sidebar_manager,
	sidebar_site_manager,
	sidebar_officer,
} from "../../helpers/sidebar.items";

const Sidebar = (props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const activeItem = sidebar_manager.findIndex(
		(item) => item.route === window.location.pathname
	);

	function closeNav() {
		setIsCollapsed(true);
		document.getElementById("mySidebar").style.width = "80px";
		document.getElementById("main").style.paddingLeft = "80px";
	}

	function openNav() {
		setIsCollapsed(false);
		document.getElementById("mySidebar").style.width = "300px";

		window.matchMedia("(max-width: 800px)").matches
			? (document.getElementById("main").style.paddingLeft = "80px")
			: (document.getElementById("main").style.paddingLeft = "300px");
	}

	return (
		<>
			<div id="mySidebar" className="sidebar">
				{isCollapsed === true ? (
					<div className="sidebar__itemmenu">
						<button className="sidebar__item-inner" onClick={openNav}>
							<i className="bx bx-menu"></i>
						</button>
					</div>
				) : (
					<div className="sidebar__itemmenu">
						<button className="sidebar__item-inner" onClick={closeNav}>
							<i className="bx bx-menu"></i>
						</button>
					</div>
				)}

				<div className="sidebar__logo">
					<img src={isCollapsed ? tinyLogo : logo} alt="company logo" />
				</div>

				{sidebar_manager.map((item, index) => (
					<Link to={item.route} key={index}>
						{isCollapsed === true ? (
							<SidebarItem icon={item.icon} active={index === activeItem} />
						) : (
							<SidebarItem
								title={item.display_name}
								icon={item.icon}
								active={index === activeItem}
							/>
						)}
					</Link>
				))}
			</div>
		</>
	);
};

export default Sidebar;
