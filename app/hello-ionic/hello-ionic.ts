import {Page, NavController} from 'ionic/ionic'

@Page({
  templateUrl: 'app/hello-ionic/hello-ionic.html'
})

export class HelloIonicPage {
  nav;
  
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
