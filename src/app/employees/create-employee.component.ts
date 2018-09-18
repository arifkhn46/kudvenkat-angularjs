import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';

import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  datePickerConfig: Partial<BsDatepickerConfig>;

  searchTerm: string;

  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Paroll'},
  ];

  previewPhoto = false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: -1,
    isActive: null,
    photoPath: null,
  };

  constructor(private _employeeService: EmployeeService, private _router: Router) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });

  }

  ngOnInit() {
  }

  saveEmployee(): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
