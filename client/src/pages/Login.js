import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import LoginImage from "../assets/images/login-img.png";
import logoImage from "../assets/images/logo.png";
import Error from "../components/toast/Error";

const Login = () => {
	const [user, setUser] = useState({ username: "", password: "" });
	const { getLoggedIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [btnState, setBtnState] = useState(false);
	const history = useHistory();

	const loginUser = async (e) => {
		e.preventDefault();
		setBtnState(true);
		setError(false);

		if (!user.username || !user.password) {
			setBtnState(false);
			return setError("Please fill all the inputs");
		}

		try {
			const res = await axios.post("users/login", user);
			setUser({ username: "", password: "" });
			setBtnState(false);
			localStorage.setItem("name", res.data.user);
			if (res.data.type === "sitemanager") {
				localStorage.setItem("site", res.data.site);
			}

			await getLoggedIn();
			history.push(`/auth/${res.data.type}/dashboard`);
		} catch (err) {
			console.log(err.response);
			setError(err.response.data.message);
			setBtnState(false);
		}
	};

	return (
		<>
			<div className="login-container">
				<img
					src={logoImage}
					alt="logo-img"
					className="logo"
					data-aos="fade"
					data-aos-delay="100"
				/>
				<h1
					className="page-header login-header accent-header"
					data-aos="zoom-out"
				>
					Welcome Back
				</h1>
				<div
					className={
						window.innerWidth <= 1400
							? "card login-card col-10"
							: "card login-card col-7"
					}
					data-aos="fade-up"
				>
					<div>
						<div className="row login-form-container">
							<div className="col-6 login-img-container">
								<img src={LoginImage} alt="login-img" data-aos="fade-right" />
							</div>
							<form className="col-6 login-form">
								{error && <Error message={error} />}
								<div className="row">
									<div className="col-12">
										<div
											className="rowuser"
											data-aos="fade-left"
											data-aos-delay="100"
										>
											<input
												type="text"
												placeholder="Username"
												required
												autoComplete="off"
												value={user.username}
												onChange={(e) => {
													setUser({ ...user, username: e.target.value });
												}}
											/>
										</div>
									</div>
									<div
										className="col-12"
										data-aos="fade-left"
										data-aos-delay="200"
									>
										<div className="rowuser">
											<input
												type="password"
												placeholder="Password"
												autoComplete="off"
												required
												value={user.password}
												onChange={(e) =>
													setUser({ ...user, password: e.target.value })
												}
											/>
										</div>
									</div>
								</div>
								<div
									className="rowuser"
									data-aos="fade-left"
									data-aos-delay="300"
								>
									<button
										type="submit"
										className="width-full"
										onClick={loginUser}
										disabled={btnState}
									>
										{btnState ? "SIGNING IN" : "SIGN IN"}
									</button>
								</div>
								<div>
									<p className="rest-pw-link">
										Want to join in?
										<Link
											to={{
												pathname: "/register",
												state: { from: "admin" },
											}}
										>
											&nbsp; Register as supplier
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
