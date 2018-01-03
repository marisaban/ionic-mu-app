import { Component } from '@angular/core';

@Component({
  selector: 'bottom-toolbar',
  templateUrl: 'bottom-toolbar.html'
})
export class BottomToolbarComponent {

  text:         string;
  minutes:      number;
  seconds:      number;
  milliseconds: number;
  miles:        number;

  constructor() {
    // pass in job title
    this.text =  'System Architect';
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.miles = 0;
  }

  pad(val){
    return val > 9 ? val : "0" + val;
  }

}
