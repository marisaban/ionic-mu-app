import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController } from 'ionic-angular';
// import { Http } from '@angular/http';

// import { TranslateService } from '@ngx-translate/core';
import { DataFinder } from '../../providers/datafinder';
// import { ItemApi } from '../../providers/item-api';

import { JobDetailsPage } from '../job-details/job-details';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  offers = [];
  jobDetalsPage = JobDetailsPage;

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, private dataFinder: DataFinder) {
  }

  ionViewDidLoad() {
    let long  = document.getElementById("long-description");
    long.style.display = "none";

    this.dataFinder.getJSONDataAsync("testData.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  /* Sets data with returned JSON array */
  SetQueryOptionsData(data : any) {
    this.offers = data.offers;
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  showDetails(){
    let short = document.getElementById("short-description");
    let long  = document.getElementById("long-description");
    let link  = document.getElementById("details");

    short.style.display = "none";
    long.style.display  = "block";
    link.style.display  = "none";
  }

  openJobDescription(){
    this.navCtrl.setRoot(JobDetailsPage);
  }
  

}
