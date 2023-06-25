import axios from "axios"
let URL_SERVER = "http://localhost:1111";

export const getProducts = () => {
	let url = `${URL_SERVER}/products`;
	return axios.get(url)
}