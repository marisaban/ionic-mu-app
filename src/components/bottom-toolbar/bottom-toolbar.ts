import { Component } from '@angular/core';

@Component({
  selector: 'bottom-toolbar',
  templateUrl: 'bottom-toolbar.html'
})
export class BottomToolbarComponent {

  text: string;
  time: number;
  miles: number;

  constructor() {
    // pass in job title
    this.text =  'System Architect';
    this.time =  12345;
    this.miles = 0;
  }

}
