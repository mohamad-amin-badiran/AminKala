import axios from "axios";
let URL_SERVER = "http://localhost:2485";

export const getProducts = () => {
  let url = `${URL_SERVER}/cart`;
  return axios.get(url);
};

export const CartAdedd = (data) => {
  let url = `${URL_SERVER}/cart`;
  return axios.post(url, data);
};

export const DeleteCart = (productId) => {
  let url = `${URL_SERVER}/cart/${productId}`;
  return axios.delete(url);
};
