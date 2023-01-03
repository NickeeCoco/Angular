import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name = "Morgane";
  public message = "Welcome to my website!";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }
  public date = new Date();
}
