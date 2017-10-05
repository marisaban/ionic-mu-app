import { Component, ViewChild } from '@angular/core';
import {  ModalController } from 'ionic-angular';

//pages 
import { LoginPage } from '../login/login';
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

  constructor(private modalCtrl: ModalController) {

  }//constructor

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

  openModal(){

    const myData = {
      
    }
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

}//export class


  