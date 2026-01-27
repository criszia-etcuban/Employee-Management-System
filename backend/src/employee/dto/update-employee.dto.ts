import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

// PartialType → lahat ng fields optional : Perfect for PATCH /employees/:id

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
