import { IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsEmail() //@IsEmail() → valid email format
  email: string;

  @IsNotEmpty() //@IsNotEmpty() → bawal empty string
  department: string;

  @IsBoolean()
  isActive: boolean;
}
