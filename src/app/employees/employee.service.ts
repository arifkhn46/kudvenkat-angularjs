import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: "Furqan",
      gender: "Male",
      contactPreference: "Email",
      email: "furqan@kt.com",
      phoneNumber: 9876543210,
      dateOfBirth: new Date("10/25/1988"),
      department: 3,
      isActive: true
    },
    {
      id: 2,
      name: "Arif",
      gender: "Male",
      contactPreference: "Email",
      phoneNumber: 9876543210,
      email: "arif@kt.com",
      dateOfBirth: new Date("04/01/1993"),
      department: 2,
      isActive: true
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  save(employee: Employee) {
    console.log(employee);
    this.listEmployees.push(employee);
  }
}