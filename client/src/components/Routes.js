import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";
import ChangeForgetPassword from "../pages/ChangeForgetPassword";
import Delivery from "../pages/Delivery";
import ForgetPassword from "../pages/ForgetPassword";
import Guest from "../pages/Guest";
import HouseOwnerDashboard from "../pages/HouseOwnerDashboard";
import HouseOwnerLogin from "../pages/HouseOwnerLogin";
import HouseOwnerManage from "../pages/HouseOwnerManage";
import HouseOwnerManageTenant from "../pages/HouseOwnerManageTenant";
import HouseOwnerManageVehicle from "../pages/HouseOwnerManageVehicle";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import SecurityDashboard from "../pages/SecurityDashboard";
import SecurityLogin from "../pages/SecurityLogin";
import SecurityManage from "../pages/SecurityManage";
import Surveillance from "../pages/Surveillance";
import SurveillanceCamera from "../pages/SurveillanceCamera";
import TenantDashboard from "../pages/TenantDashboard";
import TenantLogin from "../pages/TenantLogin";
import WorkerManage from "../pages/WorkerManage";
import ChangeGeneratedPassword from "../pages/ChangeGeneratedPassword";
import VerifyAccount from "../pages/VerifyAccount";

import { LoginAuth } from "../contexts/AuthContext";

const Routes = () => {
	const { setLoggedIn, loggedIn } = useContext(LoginAuth);

	useEffect(() => {
		setLoggedIn({
			token: localStorage.getItem("token"),
			community: localStorage.getItem("community"),
		});
	}, [setLoggedIn]);

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/login/admin" component={AdminLogin} />
			<Route exact path="/auth/admin/dashboard" component={AdminDashboard} />
			<Route
				exact
				path="/auth/admin/houseowners"
				component={HouseOwnerManage}
			/>
			<Route exact path="/auth/admin/securities" component={SecurityManage} />
			<Route exact path="/auth/admin/serviceworkers" component={WorkerManage} />
			<Route exact path="/login/houseowner" component={HouseOwnerLogin} />
			<Route
				exact
				path="/auth/houseowner/dashboard"
				component={HouseOwnerDashboard}
			/>
			<Route
				exact
				path="/auth/houseowner/vehicles"
				component={HouseOwnerManageVehicle}
			/>
			<Route
				exact
				path="/auth/houseowner/tenants"
				component={HouseOwnerManageTenant}
			/>
			<Route exact path="/login/tenant" component={TenantLogin} />
			<Route exact path="/auth/tenant/dashboard" component={TenantDashboard} />
			<Route exact path="/login/security" component={SecurityLogin} />
			<Route
				exact
				path="/auth/security/dashboard"
				component={SecurityDashboard}
			/>
			<Route
				exact
				path="/auth/security/surveillance"
				component={Surveillance}
			/>
			<Route exact path="/auth/security/deliveries" component={Delivery} />
			<Route exact path="/auth/security/guests" component={Guest} />
			<Route
				exact
				path="/auth/security/surveillance/:id"
				component={SurveillanceCamera}
			/>
			<Route exact path="/reset/password" component={ForgetPassword} />
			<Route
				exact
				path="/:user/verify/account/:code"
				component={VerifyAccount}
			/>
			<Route exact path="/:user/verify/:code" component={ResetPassword} />
			<Route
				exact
				path="/:user/reset/generated/password"
				component={ChangeGeneratedPassword}
			/>
			<Route
				exact
				path="/:user/confirmation/:email/:id"
				component={ChangeForgetPassword}
			/>
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
};

export default Routes;
