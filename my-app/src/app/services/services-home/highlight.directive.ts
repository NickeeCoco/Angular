import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    // try {
    //   console.log(el);
    //   el.nativeElement.backgroundColor = 'purple';
    //   throw new Error('An error has occured');
    // } catch (e) {
    //   console.error(e);
    // }
    // debugger;
    // el.nativeElement.backgroundColor = 'purple';
  }

}
