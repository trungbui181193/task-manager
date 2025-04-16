import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/tasks';

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const getTasks = () => axios.get(BASE_URL, authHeader());
export const createTask = (task) => axios.post(BASE_URL, task, authHeader());
export const updateTask = (id, task) => axios.put(`${BASE_URL}/${id}`, task, authHeader());
export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`, authHeader());
