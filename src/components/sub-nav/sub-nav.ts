import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'sub-nav',
  templateUrl: 'sub-nav.html'
})
export class SubNavComponent {

  text: string;

  pageName: string;

  constructor(public viewCtrl: ViewController) {

    this.pageName = this.viewCtrl.name;
    
    
    this.text = this.pageName;
  }

}
