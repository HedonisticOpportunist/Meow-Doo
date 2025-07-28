import axios from "axios";
const url = `http://localhost:4000/api/cat`;

export const getCats = async () => {
  const response = await axios.get(url);
  return response.data.cats;
};

export const createCat = async (cat) => {
  const response = await axios.post(url, cat);
  return response.data.cat;
};

export const updateCat = async (id, cat) => {
  const response = await axios.put(`${url}/${id}`, cat);
  return response.data.cat;
};

export const deleteCat = async (id) => {
  await axios.delete(`${url}/${id}`);
};
