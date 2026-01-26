//getSummary(): string =returns string, reusable logic
import { Employee } from './employee.interface';
export class EmployeeModel implements Employee {
  constructor(
    public id: number, //public means shortcut of "this.id = id;"
    public name: string,
    public email: string,
    public department: string,
    public isActive: boolean = true,
  ) {}

  //   getSummary(): string {
  //     return `${this.name} - ${this.department}`;
  //   }
}
export type { Employee };
