import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsPage } from "../forms/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goForms() {
    console.log("sasdf");
    this.navCtrl.push(FormsPage);
  }

}
