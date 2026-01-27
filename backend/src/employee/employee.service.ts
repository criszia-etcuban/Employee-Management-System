import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; //Repository = DB API
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private repo: Repository<Employee>,
  ) {}
  //find() = SELECT *
  findAll(): Promise<Employee[]> {
    return this.repo.find();
  }
  //create() = prepare entity
  create(employee: Partial<Employee>): Promise<Employee> {
    const newEmployee = this.repo.create(employee);
    return this.repo.save(newEmployee); //save() = INSERT
  }
}
