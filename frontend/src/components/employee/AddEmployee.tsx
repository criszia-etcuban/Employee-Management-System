import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Employee } from '../../models/Employee';
import { createEmployee } from '../../api/employee.api';
import EmployeeList from './EmployeeList';

export default function AddEmployee() {
  const initialEmployee = {
  name: '',
  email: '',
  department: '',
  isActive: true,
};

  const [employee, setEmployee] = useState<Employee>(initialEmployee);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createEmployee(employee);
    alert('Employee Added!');

    setEmployee(initialEmployee); // reset form
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>Add Employee</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            className="form-control mb-2"
            placeholder="Name"
            value={employee.name}
            onChange={handleChange}
          />

          <input
            name="email"
            className="form-control mb-2"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
          />

          <input
            name="department"
            className="form-control mb-2"
            placeholder="Department"
            value={employee.department}
            onChange={handleChange}
          />

          <button className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
