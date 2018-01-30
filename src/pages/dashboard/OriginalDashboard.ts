import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
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

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  infoWindows: any;

  constructor(public navCtrl: NavController, public http: Http, public geolocation: Geolocation, public connectivityService: ConnectivityService) {
    this.loadGoogleMaps();
    this.infoWindows = [];
  }

  ionViewWillEnter() {
    this.displayGoogleMap();
    this.getUserLocation();
    this.getMarkers();
  }

  loadGoogleMaps(){
 
    this.addConnectivityListeners();
 
  if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
    console.log("Google maps JavaScript needs to be loaded.");
    this.disableMap();
 
    if(this.connectivityService.isOnline()){
      console.log("online, loading map");
 
      //Load the SDK
      window['mapInit'] = () => {
        this.displayGoogleMap();
        this.enableMap();
      }
 
      let script = document.createElement("script");
      script.id = "googleMaps";
      // might have to change callback=MapInit to displayGoogleMap
      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';      
      }
 
      document.body.appendChild(script); 
 
    }
  }
  else {
 
    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.displayGoogleMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }
 
  }
 
  }//loadMaps

  displayGoogleMap() {

      this.mapInitialised = true;
  
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

  //

  disableMap(){
    console.log("disable map");
  }
 
  enableMap(){
    console.log("enable map");
  }
 
  addConnectivityListeners(){
 
    let onOnline = () => {
 
      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
          this.loadGoogleMaps();
 
        } else {
 
          if(!this.mapInitialised){
            this.displayGoogleMap();
          }
 
          this.enableMap();
        }
      }, 1000);
 
    };
 
    let onOffline = () => {
      this.disableMap();
    };
 
    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
 
  }

  //

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


  