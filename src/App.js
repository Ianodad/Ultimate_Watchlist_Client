import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

const App = () => {
	return (
		<main className='container-fluid'>
			<Switch>
				<Route path='/movies/:id' component={MovieDetails} />
				<Route path='/movies' render={props => <Movies {...props} />} />
				<Route path='/not-found' component={NotFound}></Route>
				<Route path='/' exact component={Login}></Route>
				<Redirect to='/not-found' />
			</Switch>
		</main>
	);
};

export default App;
