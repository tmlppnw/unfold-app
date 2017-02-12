import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
  ) { }

  openMenu() {
    // REFERENCE: https://github.com/driftyco/ionic-preview-app/blob/master/src/pages/action-sheets/basic/basic.html
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Create new game', // TODO: LINK THIS TO "CREATE A NEW GAME PAGE
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Create new game clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
