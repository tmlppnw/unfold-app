import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';

// Note: These questions are only in the sidebar for now...
// TODO: Remove these questions once advance button works.
import { QGameName } from '../pages/QGameName/QGameName';
import { QGamePossibility } from '../pages/QGamePossibility/QGamePossibility';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Game List', component: Page1 },
      { title: 'Create A New Game!', component: Page2 },
      { title: 'Test Page', component: Page3},
      { title: '(Hidden)Q Game Name', component: QGameName},
      { title: '(Hidden)Q Game Possibility', component: QGamePossibility}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
