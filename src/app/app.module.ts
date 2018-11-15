import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { ChenkInOutPage } from '../pages/chenk-in-out/chenk-in-out';
import { ChenkResultPage } from '../pages/chenk-result/chenk-result';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    ChenkInOutPage,
    ChenkResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage,
    ChenkInOutPage,
    ChenkResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
