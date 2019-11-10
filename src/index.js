import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//  Selecting the id root form index.html in public
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.querySelector("#root")
);
