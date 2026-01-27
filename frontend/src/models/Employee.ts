/*
Frontend version ng Employee
id? : optional (wala pa pag create)
Interface lang → type safety
Ginagamit sa props at state
*/
export interface Employee {
  id?: number;
  name: string;
  email: string;
  department: string;
  isActive: boolean;
}