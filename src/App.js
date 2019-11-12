import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import jwtDecode from "jwt-decode";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
	state = {};

	componentDidMount() {
		try {
			const jwt = localStorage.getItem("token");
			const { user } = jwtDecode(jwt);

			this.setState({ user });
			console.log(user);
		} catch (ex) {}
	}
	render() {
		return (
			<div>
				<ToastContainer />
				<Navbar user={this.state.user} />
				<main className='container-fluid'>
					<Switch>
						<Route path='/movies/:id' component={MovieDetails} />
						<Route path='/movies' render={props => <Movies {...props} />} />
						<Route path='/not-found' component={NotFound}></Route>
						<Route path='/' exact component={Login}></Route>
						<Route path='/logout' exact component={Logout}></Route>
						<Redirect to='/not-found' />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
