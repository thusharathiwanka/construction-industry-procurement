import React from "react";
import { Link } from "react-router-dom";

import "./topnav.css";

import Dropdown from "../dropdown/Dropdown";

const notifications = [
	{
		icon: "bx bx-error",
		content: "Lorem ipsum dolor sit amet  elit.",
	},
	{
		icon: "bx bx-package",
		content: "Lorem ipsum dolor sit amet  elit.",
	},
	{
		icon: "bx bx-cart",
		content: "Lorem ipsum dolor sit amet  elit.",
	},
	{
		icon: "bx bx-error",
		content: "Lorem ipsum dolor sit amet  elit.",
	},
	{
		icon: "bx bx-cart",
		content: "Lorem ipsum dolor sit amet  elit.",
	},
];

const curr_user = {
	display_name: localStorage.getItem("name"),
};

const renderNotificationItem = (item, index) => (
	<div className="notification-item" key={index}>
		<i className={item.icon}></i>
		<span>{item.content}</span>
	</div>
);

const renderUserToggle = (user) => (
	<div className="topnav__right-user">
		<div className="topnav__right-user__image">
			<img src={user.image} alt="" />
		</div>
		<div className="topnav__right-user__name">{user.display_name}</div>
	</div>
);

const renderUserMenu = (item, index) => (
	<Link to={item.route} key={index}>
		<div className="notification-item" onClick={item.onClick}>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	</Link>
);

const TopNav = () => {
	return (
		<div className="topnav">
			<div className="topnav__search">
				<input type="text" placeholder="Search here..." />
				<i className="bx bx-search"></i>
			</div>
			<div className="topnav__right">
				<div className="topnav__right-item">
					<Dropdown
						customToggle={() => renderUserToggle(curr_user)}
						renderItems={(item, index) => renderUserMenu(item, index)}
					/>
				</div>
				<div className="topnav__right-item">
					<Dropdown
						icon="bx bx-bell"
						badge="12"
						contentData={notifications}
						renderItems={(item, index) => renderNotificationItem(item, index)}
						renderFooter={() => <Link to="/">View All</Link>}
					/>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
