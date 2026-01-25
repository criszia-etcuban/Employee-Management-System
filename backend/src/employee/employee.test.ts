import { EmployeeModel } from './employee.model';
import { filterActiveEmployees } from './employee.utils';

const employees = [
  new EmployeeModel(1, 'Juan', 'juan@test.com', 'IT', true),
  new EmployeeModel(2, 'Maria', 'maria@test.com', 'HR', false),
];

const active = filterActiveEmployees(employees);

console.log('Active employees:', active);
