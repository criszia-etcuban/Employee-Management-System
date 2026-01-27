import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
  service: any;
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getEmployees() {
    return this.employeeService.findAll();
  }

  @Post()
  create(@Body() employee: Employee) {
    return this.employeeService.create(employee);
  }
}
