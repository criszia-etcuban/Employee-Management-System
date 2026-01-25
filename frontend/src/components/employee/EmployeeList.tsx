//.map() : Loop ng array
import { Employee } from '../../models/Employee';

export default function EmployeeList() {
  const employees: Employee[] = [
    {
      id: 1,
      name: 'Juan',
      email: 'juan@test.com',
      department: 'IT',
      isActive: true,
    },
    {
      id: 2,
      name: 'Maria',
      email: 'maria@test.com',
      department: 'HR',
      isActive: false,
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                {emp.isActive ? 'Active' : 'Inactive'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}