import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-work',
  templateUrl: 'work-logs.html'
})
export class WorkPage {

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(private modalCtrl: ModalController) {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
  ]
  }

  expandItem(item){
    if(item.expanded === true){
      item.expanded = false;
    }else {
      item.expanded = true;
    }
    
  }

  openModal(){
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

}
