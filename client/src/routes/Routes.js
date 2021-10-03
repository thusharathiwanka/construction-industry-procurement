import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import ManagerDashboard from "../pages/ManagerDashboard";
import ManageOrdersSupplier from "../pages/ManageOrdersSupplier";
import ManageUsers from "../pages/ManageUsers";
import MyServices from "../pages/MyServices";
import OfficerDashboard from "../pages/OfficerDashboard";
import SupplierDashboard from "../pages/SupplierDashboard";
import SiteManagerDashboard from "../pages/SiteManagerDashboard";
import ManageSites from "../pages/ManageSites";

import { AuthContext } from "../contexts/AuthContext";

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
			<Route exact path="/auth/manager/sites" component={ManageSites} />
			<Route
				exact
				path="/auth/supplier/dashboard"
				component={SupplierDashboard}
			/>
			<Route
				exact
				path="/auth/supplier/orders"
				component={ManageOrdersSupplier}
			/>
			<Route exact path="/auth/supplier/services" component={MyServices} />
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
