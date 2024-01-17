// src/api.js
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const api = {
  getUsers: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  },

  addUser: async (user) => {
    const response = await axios.post(baseURL, user);
    return response.data;
  },

  editUser: async (user) => {
    const response = await axios.put(`${baseURL}/${user.id}`, user);
    return response.data;
  },

  deleteUser: async (userId) => {
    await axios.delete(`${baseURL}/${userId}`);
  },
};

export default api;
