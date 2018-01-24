import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'page-build-profile',
  templateUrl: 'build-profile.html',
})
export class BuildProfilePage {
  public photos: any;
  public base64Image: string;
  public swapImage: any;

  dashboardPage    = DashboardPage;

  constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController ) {
  }

  ngOnInit(){
    this.photos = [];
    this.swapImage = document.getElementsByClassName("user-avatar");
  }

  takePhoto() {
    const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 600,
        targetHeight: 600,
        saveToPhotoAlbum: false
    };
    
    this.camera.getPicture(options).then(
        imageData => {
          this.base64Image = "data:image/jpeg;base64," + imageData;
          this.swapImage.nativeElement.style = "display:none";
          this.photos.push(this.base64Image);
          this.photos.reverse();
          // this.sendData(imageData);
       },
       err => {
         console.log(err);
       }
    );
    }

  //   sendData(imageData) {
  //     this.userData.imageB64 = imageData;
  //     this.userData.user_id = "1";
  //     this.userData.token = "222";
  //     console.log(this.userData);
  //     this.authService.postData(this.userData, "userImage").then(
  //     result => {
  //       this.responseData = result;
  //     },
  //     err => {
  //     // Error log
  //   }
  // );
  // }

  launchDashboardPage(){
    this.navCtrl.setRoot(DashboardPage);
  }

  goBack(){
    this.navCtrl.pop();
  }

}
