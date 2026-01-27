import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //@Entity(): DB table
export class Employee {
  @PrimaryGeneratedColumn() //@PrimaryGeneratedColumn(): Auto ID
  id: number;

  @Column() //Table column
  name: string;

  @Column()
  email: string;

  @Column()
  department: string;

  @Column()
  isActive: boolean;
}
