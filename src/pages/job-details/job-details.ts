import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {

  @ViewChild('map')  mapElement;
  map: any;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap(){

    let latLng = new google.maps.LatLng(41.758674,-87.58482);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  goBack(){
    this.navCtrl.pop();
  }

}
