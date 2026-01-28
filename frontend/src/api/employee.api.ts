import axios from 'axios';
import { Employee } from '../models/Employee';

const API_URL = 'http://localhost:3000/employees';

export const getEmployees = async (): Promise<Employee[]> => {
  const res = await axios.get<Employee[]>(API_URL);
  return res.data;
};

export const createEmployee = async (
  employee: Employee,
): Promise<Employee> => {
  const res = await axios.post<Employee>(API_URL, employee);
  return res.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

