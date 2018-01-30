import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NavController, Platform} from 'ionic-angular';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError  } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import 'rxjs/add/operator/map';

//pages 
import { ModalPage } from '../modal/modal';

//install the actual types npm install @types/google-maps --save
declare var google;

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public locations: LocationsProvider) {

  }

  ionViewDidLoad(){

      this.platform.ready().then(() => {

          let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
          let locationsLoaded = this.locations.load();

          Promise.all([
              mapLoaded,
              locationsLoaded
          ]).then((result) => {

              let locations = result[1];

              for(let location of locations){
                  this.maps.addMarker(location.latitude, location.longitude);
              }

          });

      });

  }

}


