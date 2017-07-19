import {Component, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild(Content) content: Content;
  isKeyboardHide:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard:Keyboard) {

    this.isKeyboardHide = true;

    this.keyboard.onKeyboardShow().subscribe(() => {
      this.isKeyboardHide = false;
      /* alert("Keyboard Show" + JSON.stringify(this.content.getContentDimensions()));*/

      /*  alert("Keyboard Show" + this.content.contentHeight);
       alert("Keyboard Show" + JSON.stringify(this.content.getContentDimensions()));*/
    });

    this.keyboard.onKeyboardHide().subscribe(() => {
      this.isKeyboardHide = true;
      /*  alert("Keyboard Hide" + JSON.stringify(this.content.getContentDimensions()));*/
      setTimeout(() => { // this to make sure that angular's cycle performed and the footer removed from the DOM before resizing

        this.content.resize();
      }, 500);
      /*alert("Keyboard Hide" + this.content.contentHeight);
       alert("Keyboard Hide" + JSON.stringify(this.content.getContentDimensions()));*/
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfileBankDetailsPage');
  }
}
