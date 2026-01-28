//.map() : Loop ng array
import { Employee } from '../../models/Employee';
import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../../api/employee.api';
import './EmployeeList.css';

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this employee?'
    );

    if (!confirmDelete) return;

    await deleteEmployee(id);

    // update UI without reload
    setEmployees(prev =>
      prev.filter(emp => emp.id !== id)
    );
  };

  useEffect(() => { // useEffect → runs on page load
    getEmployees()
      .then(data => setEmployees(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="glass-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading employees...</p>
        </div>
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="glass-container">
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <h3>No Employees Yet</h3>
          <p>Start by adding your first employee!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-container">
      <div className="employee-list-header">
        <div className="header-content">
          <h2 className="employee-list-title">
            <span className="title-icon">👥</span> Employee Directory
          </h2>
          <p className="employee-count">
            Total Employees: <span className="count-badge">{employees.length}</span>
          </p>
        </div>
        
        {/* View Toggle Buttons */}
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
            onClick={() => setViewMode('card')}
            title="Card View"
          >
            <span className="toggle-icon">🎴</span> Cards
          </button>
          <button
            className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Table View"
          >
            <span className="toggle-icon">📊</span> Table
          </button>
        </div>
      </div>

      {/* Card View */}
      {viewMode === 'card' && (
        <div className="employee-grid">
          {employees.map((emp, index) => (
            <div key={emp.id} className="employee-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="employee-card-header">
                <div className="employee-avatar">
                  {emp.name.charAt(0).toUpperCase()}
                </div>
                <div className="employee-info">
                  <h3 className="employee-name">{emp.name}</h3>
                  <p className="employee-email">📧 {emp.email}</p>
                </div>
              </div>
              
              <div className="employee-details">
                <div className="detail-item">
                  <span className="detail-icon">🏢</span>
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{emp.department}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">📊</span>
                  <span className="detail-label">Status:</span>
                  <span className={`status-badge ${emp.isActive ? 'active' : 'inactive'}`}>
                    {emp.isActive ? '✓ Active' : '✗ Inactive'}
                  </span>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => {
                  if (typeof emp.id !== 'number') return;
                  handleDelete(emp.id);
                }}
              >
                <span className="delete-icon">🗑️</span> Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={emp.id} className="table-row" style={{ animationDelay: `${index * 0.05}s` }}>
                  <td>
                    <div className="table-avatar">
                      {emp.name.charAt(0).toUpperCase()}
                    </div>
                  </td>
                  <td className="table-name">{emp.name}</td>
                  <td className="table-email">{emp.email}</td>
                  <td className="table-department">{emp.department}</td>
                  <td>
                    <span className={`status-badge ${emp.isActive ? 'active' : 'inactive'}`}>
                      {emp.isActive ? '✓ Active' : '✗ Inactive'}
                    </span>
                  </td>
                  <td>
                    <button
                      className="table-delete-btn"
                      onClick={() => {
                        if (typeof emp.id !== 'number') return;
                        handleDelete(emp.id);
                      }}
                      title="Delete Employee"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
