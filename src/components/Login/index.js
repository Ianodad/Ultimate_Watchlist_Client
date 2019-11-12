import React, { Component } from "react";

import Joi from "joi-browser";

import Login from "./Login";

import { postLogin } from "../../services/authService";

import "./Login.css";

class index extends Component {
	state = { account: { username: "", password: "" }, errors: {} };

	schema = {
		username: Joi.string()
			.required()
			.label("Username"),
		password: Joi.string()
			.required()
			.label("Password")
	};

	// validate from with specified errors
	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.account, this.schema, options);
		// console.log(error);
		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	// handle submission of form
	handleSubmit = async e => {
		e.preventDefault();

		const errors = this.validate();
		// console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		try {
			const { account } = this.state;
			const { data: jwt } = await postLogin(account.username, account.password);
			console.log(jwt);
			localStorage.setItem("token", jwt);
			this.props.history.push("/movies");
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.password = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	// handle form on change set the state
	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.value];

		// assigns target value to state name
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account, errors });
	};

	render() {
		// destructuring   state for better visibility
		const { account, errors } = this.state;
		return (
			<div className=' container-fluid login' style={{ height: "100vh" }}>
				<div>
					<Login
						errors={errors}
						username={account.username}
						password={account.password}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						validate={this.validate}
					/>
				</div>
			</div>
		);
	}
}

export default index;
