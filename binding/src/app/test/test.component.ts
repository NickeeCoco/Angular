import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name = "Morgane";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  
  constructor() {}

  ngOnInit() {}

  greetUser() {
    return "Hello " + this.name;
  }
}
