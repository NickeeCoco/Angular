import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // @Input() public parentData: any;
  // create alias for property
  @Input('parentData') public name: any;

  // send data to parent via custom event
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hello world!');
  }
}
