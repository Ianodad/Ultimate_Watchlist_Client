import React from "react";

const Input = ({ name, type, value, handleChange, placeholder }) => {
	return (
		<div className='form-group mb-3'>
			<input
				autoFocus
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className='form-control rounded-pill border-0 shadow-sm px-4'
			/>
		</div>
	);
};

export default Input;
