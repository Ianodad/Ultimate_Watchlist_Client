import React from "react";

import { Route } from "react-router-dom";

import Login from "./components/Login";

const App = () => {
	return (
		<main className='container'>
			<Route path='/' component={Login}></Route>
			{/* <Route path='/movies' component={Movies}></Route>
		<Route path='/not-found' component={NotFound}></Route> */}
		</main>
	);
};

export default App;
