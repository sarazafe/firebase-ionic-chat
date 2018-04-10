import {Component, Input} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RoomProvider} from '../../providers/room/room';
import {MemberProvider} from '../../providers/member/member';
import {Member} from '../../model/member';
import {Chat} from '../../constants/chat';
import {Endpoints} from "../../constants/endpoints";
import {User} from "../../model/user";

/**
 * Chat page
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user: User;

  members: Member[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private roomProvider: RoomProvider,
              private memberProvider: MemberProvider) {
    this.user = this.navParams.get('user');
    this.members = [];

    // When the list of members grows up, add to the list of members
    this.memberProvider.getMemberReference().on('child_added', (val) => {
      this.members.push(new Member(val.val()));
    });
  }

  ionViewDidLoad() {
    // Init the room
    this.roomProvider.initRoom().then(() => {
      // Add user to the room
      let member: Member = new Member({uid: this.user.uid, email: this.user.email, roomId: Chat.DEFAULT_ROOM_ID})
      this.memberProvider.addMember(member);
    }).catch(function (error) {
      console.log("Init room error", error);
    });
  }

  /**
   * It gets the description of the members
   * @returns {string}
   */
  getMembersDescription(): string {
    let description: string = '';
    this.members.forEach((member, index) => {
      description += member.email;
      if (index < this.members.length - 1) {
        description += ', ';
      }
    });
    return description;
  }

}
