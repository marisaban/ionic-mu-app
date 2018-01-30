import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

 
declare var Connection;
 
@Injectable()
export class ConnectivityProvider {
 
  onDevice: boolean;
 
  constructor(public platform: Platform, public http: Http){
    this.onDevice = this.platform.is('cordova');
  }
 
  isOnline(): boolean {
    if(this.onDevice && Network.type){
      return Network.type != 'none';
    } else {
      return navigator.onLine; 
    }
  }

  isOffline(): boolean {
    if(this.onDevice && Network.type){
      return Network.type == 'none';
    } else {
      return !navigator.onLine;   
    }
  }
}