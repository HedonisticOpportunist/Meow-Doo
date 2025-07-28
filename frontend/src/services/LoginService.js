import axios from "axios";
const baseUrl = `http://localhost:4000/api/`

export const loginUser = async (email, password) => {
  return axios.post(`${baseUrl}login`, { email, password });
};

export const registerUser = async (email, password) => {
  return axios.post(`${baseUrl}signup`, { email, password });
};

export const deleteUser = async (email) => {
  await axios.delete(`${baseUrl}:${email}`);
};
