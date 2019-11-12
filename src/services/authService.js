import http from "./httpService";

import { apiUrl } from "../config.json";

const apiEndPoint = `${apiUrl}/auth`;

export function postLogin(username, password) {
	console.log(username);
	return http.post(`${apiEndPoint}/login`, { username, password });
}
