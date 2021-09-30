import React, { useState, useEffect } from "react";
import "./layout.css";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
};

export default Layout;
