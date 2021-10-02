import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import ManagerDashboard from "../pages/ManagerDashboard";
import SupplierDashboard from "../pages/SupplierDashboard";

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
			<Route
				exact
				path="/auth/supplier/dashboard"
				component={SupplierDashboard}
			/>
		</Switch>
	);
};

export default Routes;
