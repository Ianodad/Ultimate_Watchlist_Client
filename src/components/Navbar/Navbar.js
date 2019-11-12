import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
			<button
				className='navbar-toggler'
				type='button'
				data-target='#navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav'>
					<li className='nav-item active'>
						<Link to='/' className='nav-link'>
							Login
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/movies' className='nav-link'>
							Movies
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='./register' className='nav-link'>
							Register
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-link'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
