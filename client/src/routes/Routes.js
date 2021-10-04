import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import ManagerDashboard from "../pages/ManagerDashboard";
import ManageOrdersSupplier from "../pages/ManageOrdersSupplier";
import ManageUsers from "../pages/ManageUsers";
import OfficerDashboard from "../pages/OfficerDashboard";
import SupplierDashboard from "../pages/SupplierDashboard";
import SiteManagerDashboard from "../pages/SiteManagerDashboard";
<<<<<<< HEAD
import OfficerOrders from "../pages/OfficerOrders";
=======
import ManageSites from "../pages/ManageSites";
import SiteManagerForm from "../pages/siteManagerForm";
import ManageMaterials from "../pages/ManageMaterials";
import Inventory from "../pages/inventory";
import Register from "../pages/Register";
import ManageSuppliers from "../pages/ManageSuppliers";
import ManageServices from "../pages/ManageServices";

>>>>>>> 5d403dcf19dda39e6f3d37501f784a237c0db42e

import { AuthContext } from "../contexts/AuthContext";

const Routes = () => {
	const { loggedIn } = useContext(AuthContext);

	console.log(loggedIn);

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route
				exact
				path="/auth/manager/dashboard"
				component={ManagerDashboard}
			/>
			<Route exact path="/auth/manager/users" component={ManageUsers} />
			<Route exact path="/auth/manager/sites" component={ManageSites} />
			<Route exact path="/auth/manager/materials" component={ManageMaterials} />
			<Route exact path="/auth/manager/suppliers" component={ManageSuppliers} />
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
			<Route exact path="/auth/supplier/services" component={ManageServices} />
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
				path="/auth/sitemanager/orderList"
				component={OfficerOrders}
			/>
			<Route
				exact
				path="/auth/sitemanager/requisitions"
				component={SiteManagerForm}
			/>
			<Route exact path="/auth/sitemanager/inventory" component={Inventory} />
		</Switch>
	);
};

export default Routes;
