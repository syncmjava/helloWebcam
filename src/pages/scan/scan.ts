import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserQRCodeReader, VideoInputDevice } from '@zxing/library';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
   codeReader;
   firstDeviceId;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codeReader= new BrowserQRCodeReader();
   


  }


  ionViewDidLoad() {
    this.ionConLoad();
    console.log('ionViewDidLoad ScanPage');
  }

  ionConLoad() {
    console.log('ZXing code reader initialized')

    this.codeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                   
                  this.firstDeviceId = videoInputDevices[0].deviceId
                    console.log('firstDeviceId' + this.firstDeviceId);
                    if (videoInputDevices.length > 1) {
                        videoInputDevices.forEach((element) => {

                            console.log('label:' +element.label + ' firstDeviceId:' + element.deviceId);
                            
                        })

                    }

                 
                })
                .catch((err) => {
                    console.error(err)
                });
  


  this.codeReader.decodeFromInputVideoDevice(this.firstDeviceId, 'video').then((result) => {
    console.log(result);

}).catch((err) => {
    console.error(err);
    
})
console.log('Started continous decode from camera with id ');

}

}
