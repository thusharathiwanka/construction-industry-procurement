import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

// import { LoginAuth } from "../contexts/AuthContext";

const Routes = () => {
	// const { setLoggedIn, loggedIn } = useContext(LoginAuth);

	// useEffect(() => {
	// 	setLoggedIn({
	// 		token: localStorage.getItem("token"),
	// 		community: localStorage.getItem("community"),
	// 	});
	// }, [setLoggedIn]);

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
		</Switch>
	);
};

export default Routes;
