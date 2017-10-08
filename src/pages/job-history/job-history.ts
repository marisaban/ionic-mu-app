import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-history',
  templateUrl: 'job-history.html'
})
export class HistoryPage {
  dashboardPage = DashboardPage;
  homePage      = HomePage;

  jobs: any = new Array(4);
  //expanded
  itemExpanded: boolean = false;
  //expandHeight
  itemExpandHeight: number = 200;


  currentHeight: number = 0;

  constructor(private modalCtrl: ModalController) {
    
  }

  expandJob(job){
    if(this.itemExpanded == false){
      this.itemExpanded = true;
    }else {
      this.itemExpanded = false;
    }

  }

  openModal(){
    
      let myModal = this.modalCtrl.create(ModalPage);
      myModal.present();
    }

}