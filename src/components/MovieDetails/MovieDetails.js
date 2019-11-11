import React from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.css";
// import TextTruncate from "react-text-truncate";

const MovieDetails = ({ movie }) => {
	return (
		<div className=' container-fluid movieDetail'>
			<div className='moviecard'>
				<div
					className='movie-poster'
					style={{
						backgroundImage: `url(http://image.tmdb.org/t/p/w200/${movie.poster_path})`
					}}
				/>
				<div id='movie-content'>
					<div className='movie-ratings'>
						<span className='star'>★</span>
						<span className='score'>{movie.vote_average}</span>
						<span className='score-out-of'>/ 10 (IMDB)</span>
					</div>
					<div className='movie-title'>
						<a
							className=' d-inline-block text-truncate'
							href='#!'
							target='_blank'
						>
							{movie.title}
						</a>
						<span className='movie-year'>{movie.release_date}</span>
					</div>
					<div className='movie-details'>
						<span className='movie-rating'>R</span>
						<span className='movie-duration'>2h 1min</span>
						<span className='movie-genre'>Action, Crime, Drama</span>
					</div>
					<div className='movie-castcrew'>
						<span className='title'>Director</span>
						<span className='name'>Denis Villeneuve</span>
					</div>
					<div className='movie-castcrew'>
						<span className='title'>Writer</span>
						<span className='name'>Taylor Sheridan</span>
					</div>
					<div className='movie-castcrew'>
						<span className='title'>Cast</span>
						<span className='name'>
							Emily Blunt, Josh Brolin, Benicio Del Toro
						</span>
					</div>
					<div className='movie-synopsis'>
						{movie.overview}
						{/* <TextTruncate
							line={10}
							element='a'
							truncateText='…'
							text={movie.overview}
						/> */}
					</div>
					<Link to='/movies/'>
						<button className='movie-detail-btn play-trailer' type='button'>
							Back
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
