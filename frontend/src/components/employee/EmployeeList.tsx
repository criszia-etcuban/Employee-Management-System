//.map() : Loop ng array
import { Employee } from '../../models/Employee';
import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../../api/employee.api';

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

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

    if (loading) return <p>Loading...</p>;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.isActive ? 'Active' : 'Inactive'}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  if (typeof emp.id !== 'number') return;
                  handleDelete(emp.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}