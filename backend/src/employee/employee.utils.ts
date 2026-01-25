//Employee[]    :array of Employee
//.filter()     :JavaScript array method
import { Employee } from './employee.interface';

export function filterActiveEmployees(employees: Employee[]): Employee[] {
  return employees.filter((emp) => emp.isActive);
}
