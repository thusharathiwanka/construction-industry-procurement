import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import { AuthContext } from "../contexts/AuthContext";

const Routes = () => {
	const { loggedIn } = useContext(AuthContext);

	console.log(loggedIn);

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
		</Switch>
	);
};

export default Routes;
