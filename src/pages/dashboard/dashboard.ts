import { Component, ViewChild } from '@angular/core';
import {  ModalController, NavController, ViewController } from 'ionic-angular';

//pages 
import { ModalPage } from '../modal/modal';

//install the actual types npm install @types/google-maps --save
declare var google;

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  @ViewChild('map') mapElement;
  map: any;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public viewCtrl: ViewController) {

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

  openModal(){
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

}


  