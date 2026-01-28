import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Employee } from '../../models/Employee';
import { createEmployee } from '../../api/employee.api';
import './AddEmployee.css';

export default function AddEmployee() {
  const initialEmployee = {
    name: '',
    email: '',
    department: '',
    isActive: true,
  };

  const [employee, setEmployee] = useState<Employee>(initialEmployee);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    setIsSubmitting(true);
    
    try {
      await createEmployee (employee);
      setShowSuccess(true);
      setEmployee(initialEmployee); // reset form
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      alert('Error adding employee. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-container">
      <div className="add-employee-header">
        <h2 className="add-employee-title">
          <span className="icon">✨</span> Add New Employee
        </h2>
        <p className="add-employee-subtitle">Fill in the details to add a new team member</p>
      </div>

      {showSuccess && (
        <div className="success-alert">
          <span className="success-icon">✓</span>
          Employee added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">👤</span> Full Name
          </label>
          <input
            name="name"
            type="text"
            className="form-input"
            placeholder="Enter full name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">📧</span> Email Address
          </label>
          <input
            name="email"
            type="email"
            className="form-input"
            placeholder="Enter email address"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <span className="label-icon">🏢</span> Department
          </label>
          <input
            name="department"
            type="text"
            className="form-input"
            placeholder="Enter department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span> Adding...
            </>
          ) : (
            <>
              <span className="btn-icon">💾</span> Save Employee
            </>
          )}
        </button>
      </form>
    </div>
  );
}
