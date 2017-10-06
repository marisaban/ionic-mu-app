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

    let latLng = new google.maps.LatLng(37.7824796,-122.4099918);

    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const contentString = `
    <div id="content">
      <h4>Accounting Manager </h4>
      <h4>Start Date</h4>
      <p>20.09.2017</p>

      <h4>End Date</h4>
      <p>20.11.2017</p>

      <h4>Description</h4>
      <p>We are looking for a responsible Budget Manager to
      developer our company's budget and oversee its implementation...
      </p>
    </div>
    `;

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Hello World!'
    });

    // marker.setMap(this.map);

    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });

  }

}