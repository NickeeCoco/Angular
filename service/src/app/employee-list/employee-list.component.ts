import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees:any = [];
  public errorMsg: any;

  constructor(private _employeeService : EmployeeService) {

  }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe({
      next: data => this.employees = data,
      error: error => this.errorMsg = error
    });
  }
}
