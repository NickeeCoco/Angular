import { Component } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  public employees = [
    {id: 1, "name": "Andrew", "age": 30},
    {id: 2, "name": "Brandon", "age": 25},
    {id: 3, "name": "Christina", "age": 26},
    {id: 4, "name": "Elena", "age": 28},
  ];
}
