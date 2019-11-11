import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";
import TextTruncate from "react-text-truncate";
const Movies = ({ movies }) => {
	return (
		<div className='container-fluid movie'>
			<div className='content'>
				<h1 className='heading'>WHATS ON SHOW</h1>
				<p className='description'>Hover over a card to flip it.</p>

				{movies.map(movie => (
					<div className='cardm'>
						<div
							className='front'
							style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w200/${movie.poster_path})` }}
						>
							<p>{movie.title}</p>
						</div>
						<div className='back'>
							<div>
								<TextTruncate
									line={10}
									element='span'
									truncateText='…'
									text={movie.overview}
								/>

								<Link className='text-light' to={`/movies/${movie.id}`}>
									<button className='button'>More Detail</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Movies;
