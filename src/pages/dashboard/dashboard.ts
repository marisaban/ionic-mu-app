import { Component, ViewChild } from '@angular/core';
import {  NavController} from 'ionic-angular';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError  } from '@ionic-native/geolocation';
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
  infoWindows: any;

  constructor(public navCtrl: NavController, public http: Http, public geolocation: Geolocation) {
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
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
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
    '<div id="iw-container">' +
  '<div class="iw-title">' + marker.title+ '</div>' +
  '<div class="iw-content">' +
    '<div class="iw-subTitle"> Start Date </div>' +
    '<p>' + marker.start + '</p>' +
    '<div class="iw-subTitle">Contacts</div>' +
    '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
    '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
  '</div>' +
  '<div class="iw-bottom-gradient"></div>' +
'</div>',

    maxWidth: 350

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


