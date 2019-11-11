import http from "./httpService";

const apiEndPoint = "http://localhost:5000/api/movies";

export function getMovies() {
	return http.get(apiEndPoint);
}

export function getMovie(id) {
	return http.get(`${apiEndPoint}/${id}`);
}
