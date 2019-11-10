import React from "react";
import "./Login.css";

import Input from "../common/Input";
const Login = ({
	username,
	password,
	handleSubmit,
	handleChange,
	errors,
	validate
}) => {
	return (
		<div className='col-lg-5 col-xl-3 col-md-6 mx-auto'>
			<h3 className='display-4'>Welcome</h3>
			<p className='text-muted mb-4'>Key in your credentials</p>
			<form onSubmit={handleSubmit}>
				<Input
					type='text'
					name='username'
					value={username}
					placeholder='Username'
					error={errors.username}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<Input
					type='password'
					name='password'
					value={password}
					placeholder='Password'
					error={errors.password}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<button
					disabled={validate()}
					// type='submit'
					className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'
				>
					Login In
				</button>
			</form>
		</div>
	);
};

export default Login;
