import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
import { getMovie } from "../../services/movies";

class index extends Component {
	state = {
		movieId: "",
		movie: {}
	};
	componentDidMount() {
		const movieId = this.props.match.params.id;
		this.setState({ movieId, movie: getMovie(movieId) });
	}

	render() {
		const { movie } = this.state;
		console.log(movie);
		return (
			<div>
				<MovieDetails movie={movie} />
			</div>
		);
	}
}

export default index;
