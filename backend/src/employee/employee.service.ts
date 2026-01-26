import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [
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

  findAll(): Employee[] {
    return this.employees;
  }
}
