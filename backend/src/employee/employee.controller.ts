import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getEmployees() {
    return this.employeeService.findAll();
  }
}
