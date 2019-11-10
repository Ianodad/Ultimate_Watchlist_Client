import React, { Component } from "react";
import Movies from "./Movies";
import { getMovies } from "../../services/movies";
class index extends Component {
	state = { movies: [] };

	componentDidMount() {
		this.setState({ movies: getMovies() });
	}

	render() {
		const { movies } = this.state;
		return (
			<div>
				<Movies movies={movies} />
			</div>
		);
	}
}

export default index;
