import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Employee } from '../../models/Employee';


export default function AddEmployee() {
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    name: '',
    email: '',
    department: '',
    isActive: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Employee:', employee);
    alert('Employee added (console only)');
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
            onChange={handleChange}
          />

          <input
            name="email"
            className="form-control mb-2"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="department"
            className="form-control mb-2"
            placeholder="Department"
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
