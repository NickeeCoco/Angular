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

  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  public greeting2 = "";
  
  constructor() {}

  ngOnInit() {}

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event: any) {
    console.log(event);
    this.greeting = event.type;
  }
}
