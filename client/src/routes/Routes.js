import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import ManagerDashboard from "../pages/ManagerDashboard";
import SupplierDashboard from "../pages/SupplierDashboard";
import OfficerDashboard from "../pages/OfficerDashboard";
import SiteManagerDashboard from "../pages/SiteManagerDashboard";

import { AuthContext } from "../contexts/AuthContext";
import ManageUsers from "../pages/ManageUsers";

const Routes = () => {
	const { loggedIn } = useContext(AuthContext);

	console.log(loggedIn);

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route
				exact
				path="/auth/manager/dashboard"
				component={ManagerDashboard}
			/>
			<Route exact path="/auth/manager/users" component={ManageUsers} />
			<Route
				exact
				path="/auth/supplier/dashboard"
				component={SupplierDashboard}
			/>
			<Route
				exact
				path="/auth/officer/dashboard"
				component={OfficerDashboard}
			/>
			<Route
				exact
				path="/auth/sitemanager/dashboard"
				component={SiteManagerDashboard}
			/>
		</Switch>
	);
};

export default Routes;
