import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-work',
  templateUrl: 'work-logs.html'
})
export class WorkPage {

  items: any = [];
  months: any = [];
  itemExpandHeight: number = 100;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController) {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
  ], 
    this.months = [
                  "Jan", "Feb", "Mar", "April", "May", "June", 
                  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
                  ];
  }

  ionViewDidLoad(months){
    console.log(this.months[3]); 
  }

  expandItem(item){
    if(item.expanded === true){
      item.expanded = false;
    }else {
      item.expanded = true;
    }
    
  }

  openModal(){
    this.navCtrl.push(ModalPage);
  }

}
