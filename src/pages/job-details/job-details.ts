import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

declare var google;

@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {

  @ViewChild('map')  mapElement;
  map: any;

  constructor(private modalCtrl: ModalController, public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap(){

    let latLng = new google.maps.LatLng(41.758674,-87.58482);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  clickMe(){
    console.log("hi");
  }

  openModal(){
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
    console.log("fassadfsfas");
  }

}
