import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
import { getMovie } from "../../services/movieService";

class index extends Component {
	state = {
		movieId: "",
		movie: {}
	};
	async componentDidMount() {
		const movieId = this.props.match.params.id;
		const { data: result } = await getMovie(movieId);
		const movie = result[0];
		this.setState({ movieId, movie });
	}

	render() {
		const { movie } = this.state;
		// console.log(movie);
		return (
			<div>
				<MovieDetails movie={movie} />
			</div>
		);
	}
}

export default index;
