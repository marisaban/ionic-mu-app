import { Component, ViewChild } from '@angular/core';
import {  NavController} from 'ionic-angular';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError  } from '@ionic-native/geolocation';
import { ConnectivityService } from '../../providers/connectivity-service/connectivity-service';
import { Http } from '@angular/http';
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
  options : GeolocationOptions;
  currentPos : Geoposition;

  @ViewChild('map') mapContainer;
  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  infoWindows: any;

  constructor(public navCtrl: NavController, public http: Http, public geolocation: Geolocation, public connectivityService: ConnectivityService) {
    this.infoWindows = [];
  }

  ionViewWillEnter() {
    this.displayGoogleMap();
    this.getUserLocation();
    this.getMarkers();
  }

  displayGoogleMap() {
  
      let latLng = new google.maps.LatLng(40.795430, -73.961241);

      let mapOptions = {
        center: latLng,
        disableDefaultUI: true,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

      this.map.addListener('click', () => {
        for(let window of this.infoWindows) {
          window.close();
        }
      });
    
  }

  getUserLocation(){
    this.options = {
      enableHighAccuracy : true
  };

  this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentPos = pos;      
      console.log(pos);

  },(err : PositionError)=>{
      console.log("error : " + err.message);
  });
  }

  getMarkers() {
    this.http.get('assets/data/markers.json')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
    });
  }
  

  addMarkersToMap(markers) {
    for(let marker of markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var dogwalkMarker = new google.maps.Marker({
        position: position,
        title: marker.name,
        start: marker.start,
        end: marker.end,
        description: marker.description,
        icon: 'assets/img/marker.png'});
      dogwalkMarker.setMap(this.map);
      this.addInfoWindowToMarker(dogwalkMarker);
    }
  }

  //add InfoWindow to markers
  addInfoWindowToMarker(marker) {
    var infoWindowContent = 
    '<div id="content"><h4>' + marker.title + '</h4><h4>Start Date</h4><p>' + marker.start + '</p><h4>End Date</h4><p>' + marker.end + '</p><h4>Description</h4><p>' + marker.description + '</p></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });

    this.infoWindows.push(infoWindow);
    
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  openModal(){
    this.navCtrl.push(ModalPage);
  }

}


  