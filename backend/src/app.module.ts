import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Awsol..123456',
      database: 'ems', //database name
      autoLoadEntities: true, //autoLoadEntities: true → auto-detect entities
      synchronize: true, //synchronize: true → auto-create tables (DEV only)
    }),
    EmployeeModule,
  ],
})
export class AppModule {}
