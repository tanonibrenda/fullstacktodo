import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

const getAllTasks = () => axios.get(API_URL);
const getTaskById = (id) => axios.get(`${API_URL}/${id}`);
const createTask = (task) => axios.post(API_URL, task);
const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
