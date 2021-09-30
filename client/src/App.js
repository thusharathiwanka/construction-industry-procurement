import { useEffect } from "react";
import AOS from "aos";
import Axios from "axios";

import "./App.css";
import "./assets/boxicons-2.0.9/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";
import "./assets/css/Usercreate.css";
import "aos/dist/aos.css";

import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
	Axios.defaults.baseURL = "http://localhost:5000/api/v1/";

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
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
