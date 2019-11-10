import React from "react";
import "./Movies.css";

const Movies = () => {
	return (
		<div className='content'>
			<h1 className='heading'>WHATS ON SHOW</h1>
			<p className='description'>Hover over a card to flip it.</p>
			<a className='card' href='#!'>
				<div
					className='front'
					style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
				>
					<p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
				</div>
				<div className='back'>
					<div>
						<p>Consectetur adipisicing elit. Possimus, praesentium?</p>
						<p>
							Provident consectetur natus voluptatem quis tenetur sed beatae
							eius sint.
						</p>
						<button className='button'>Click Here</button>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Movies;
