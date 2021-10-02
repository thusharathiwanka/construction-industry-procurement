import { useEffect } from "react";
import axios from "axios";
import AOS from "aos";

import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";

import "./App.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";
import "./assets/css/Usercreate.css";

import AuthContextProvider from "./contexts/AuthContext";

import Layout from "./components/layout/Layout";

function App() {
	axios.defaults.baseURL = "http://localhost:5000/api/v1/";
	axios.defaults.withCredentials = true;

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 1000,
			disable: function () {
				let maxWidth = 900;
				return window.innerWidth < maxWidth;
			},
		});
	});

	return (
		<AuthContextProvider>
			<Layout />
		</AuthContextProvider>
	);
}

export default App;
