import axios from 'axios';
import { API_URL } from '../config';
import { Employee } from '../models/Employee';

const EMPLOYEE_API = `${API_URL}/employees`;
// const API_URL = 'http://localhost:3000/employees';

export const getEmployees = async (): Promise<Employee[]> => {
  const res = await axios.get<Employee[]>(EMPLOYEE_API);
  return res.data;
};

export const createEmployee = async (
  employee: Employee,
): Promise<Employee> => {
  const res = await axios.post<Employee>(EMPLOYEE_API, employee);
  return res.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await axios.delete(`${EMPLOYEE_API}/${id}`);
};

