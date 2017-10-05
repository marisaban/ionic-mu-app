import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-matching',
  templateUrl: 'matching-jobs.html'
})
export class MatchingPage {
  dashboardPage = DashboardPage;
  homePage      = HomePage;

  @ViewChild('map') mapElement;
  map: any;

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap(){

    let latLng = new google.maps.LatLng(40.795430, -73.961241);

    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}