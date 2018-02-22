import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

declare var SecurityProvider;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = TabsPage;

  constructor (platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      SecurityProvider.installIfNeededAsync().then(data => {
        console.log('Everything is good: ' + data);

      }).catch(error => {
        console.log("Something is wrong with this device's Google Play Services");
        console.log('What is the error?: ' + error);
      });

      statusBar.styleDefault();
      splashScreen.hide();
    }).catch();
  }
}
