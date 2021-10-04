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
import SiteManagerForm from "../pages/siteManagerForm";

import Inventory from "../pages/inventory";

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
			<Route exact path="/auth/supplier/my" component={MyServices} />
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
			<Route
				exact
				path="/auth/sitemanager/requisitions"
				component={SiteManagerForm}
			/>
			<Route
				exact
				path="/auth/sitemanager/inventory"
				component={Inventory}
			/>

			
		</Switch>
	);
};

export default Routes;
