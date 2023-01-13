import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  public employees:any = [];
  public errorMsg:any;

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
