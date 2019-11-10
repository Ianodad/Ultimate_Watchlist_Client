import React, { Component } from "react";

import Login from "./Login";

class index extends Component {
	state = { account: { username: "", password: "" } };

	// handle form on change set the state
	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		// assigns target value to state name
		account[input.name] = input.value;
		this.setState({ account });
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log("form submitted");
	};
	render() {
		// destructuring   state for better visibility
		const { account } = this.state;
		return (
			<div className=' container-fluid bg-dark' style={{ height: "100vh" }}>
				<div>
					<Login
						username={account.username}
						password={account.password}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
					/>
				</div>
			</div>
		);
	}
}

export default index;
