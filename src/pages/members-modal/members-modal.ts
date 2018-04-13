import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Member} from "../../model/member";

/**
 * Generated class for the MembersModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members-modal',
  templateUrl: 'members-modal.html',
})
export class MembersModalPage {
  members: Member[];

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.members = navParams.get('members');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersModalPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
