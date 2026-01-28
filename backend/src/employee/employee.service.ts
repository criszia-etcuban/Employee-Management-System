/*
NOTES:
create() = prepare entity
find() = SELECT *
*/
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';

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

  async remove(id: number): Promise<void> {
    const result = await this.repo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Employee not found');
    }
  }
}
