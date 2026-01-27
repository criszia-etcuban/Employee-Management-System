/*
NOTES:
create() = prepare entity
find() = SELECT *
*/
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; //Repository = DB API
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private repo: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeDto) {
    const employee = this.repo.create(dto);
    return await this.repo.save(employee);
  }

  async findAll() {
    return await this.repo.find();
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.repo.findOneBy({ id });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    Object.assign(employee, dto);
    return await this.repo.save(employee);
  }
}
