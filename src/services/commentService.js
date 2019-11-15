import http from "./httpService";

import {apiUrl} from "../config.json";
const apiEndPoint = `${apiUrl}/comments`;


export function getAllComments() {
	return http.get(apiEndPoint);
}