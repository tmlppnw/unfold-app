import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {ConditionOfMilestones} from '../ConditionOfMilestones/ConditionOfMilestones';

@Component({
  templateUrl: 'NumberOfMilestones.html'
})
export class NumberOfMilestones {
  form;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController)
  {
    this.form = new FormGroup({
      numberOfMilestones: new FormControl("", Validators.required),
    });
  }

  transition() {
    this.navCtrl.push(ConditionOfMilestones, {numberOfMilestones: this.form.value.numberOfMilestones});
  }

  processForm() {
    let alert = this.alertCtrl.create({
      message: this.form.value.numberOfMilestones,
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
