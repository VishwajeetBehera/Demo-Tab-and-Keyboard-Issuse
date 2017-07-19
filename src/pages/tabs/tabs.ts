import {Component, ViewChild} from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {Content, NavController, NavParams} from "ionic-angular";
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild(Content) content: Content;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  inMainisKeyboardHide:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard:Keyboard) {

    this.inMainisKeyboardHide = true;

    this.keyboard.onKeyboardShow().subscribe(() => {
      this.inMainisKeyboardHide = false;
      setTimeout(() => { // this to make sure that angular's cycle performed and the footer removed from the DOM before resizing
        this.content.resize();
      }, 1000);
    });

    this.keyboard.onKeyboardHide().subscribe(() => {
      this.inMainisKeyboardHide = true;
      setTimeout(() => { // this to make sure that angular's cycle performed and the footer removed from the DOM before resizing
        this.content.resize();
      }, 500);
    });
  }
}
