import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-work',
  templateUrl: 'work-logs.html'
})
export class WorkPage {

  constructor(private modalCtrl: ModalController) {
    
  }

  openModal(){
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

}
