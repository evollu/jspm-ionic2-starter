import "./app.css!";
import 'zone.js';
import 'reflect-metadata';
import 'web-animations';
import {App, IonicApp, Platform} from 'ionic/ionic';

import {HelloIonicPage} from './hello-ionic/hello-ionic';
import {ListPage} from './list/list';
import {IntroPage} from './intro/intro';
import {LoginPage} from './login/login';

@App({
  templateUrl: 'app/app.html'
})

class MyApp {
  app;
  platform;
  pages;
  rootPage;
  
  constructor(app: IonicApp, platform: Platform) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Intro', component: IntroPage},
      { title: 'Login', component: LoginPage},
      { title: 'My First List', component: ListPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = IntroPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //
      // For example, we might change the StatusBar color. This one below is
      // good for light backgrounds and dark text;
      if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
    this.rootPage = page.component;
  }
}