import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {GameName} from '../GameName/GameName';

@Component({
  templateUrl: 'LifeArea.html'
})
export class LifeArea {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      gameLifeArea: new FormControl("", Validators.required),
    });
  }

  transition() {
    console.log(this.form);
    this.navCtrl.push(GameName, {gameLifeArea: this.form.value.gameLifeArea});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      // title: 'pew pew',
      message: this.form.value.gameLifeArea,
      buttons: [{
        text: 'Ok'
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present();
      this.transition();
    }
  }

}
