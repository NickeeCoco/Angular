import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {
  <bankingServices: any[] = [
    {
      "type": "Issue business loans",
      "years": 2
    },
    {
      "type": "Provide periodic reports and analysis",
      "years": 7
    },
    {
      "type": "Open new checking and/or saving accounts",
      "years": 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
