import {Component, Input} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RoomProvider} from '../../providers/room/room';
import {MemberProvider} from '../../providers/member/member';
import {Member} from '../../model/member';
import {Chat} from '../../constants/chat';
import {Endpoints} from "../../constants/endpoints";
import {User} from "../../model/user";
import {Message} from "../../model/message";
import {MessageProvider} from "../../providers/message/message";

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
  message: string;
  member: Member;
  messages: Message[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private roomProvider: RoomProvider,
              private memberProvider: MemberProvider,
              private messageProvider: MessageProvider) {
    this.user = this.navParams.get('user');
    this.members = [];
    this.message = '';
    this.messages = [];

    // When the list of members grows up, add to the list of members
    this.memberProvider.getMemberReference().on('child_added', (val) => {
      this.members.push(new Member(val.val()));
    });

    // When a message has been sent, add to the list of messages
    this.messageProvider.getMessageReference().on('child_added', (val) => {
      this.messages.push(new Message(val.val()));
    });
  }

  ionViewDidLoad() {
    // Init the room
    this.roomProvider.initRoom().then(() => {
      // Add user to the room
      this.member = new Member({
        uid: this.user.uid,
        email: this.user.email,
        roomId: Chat.DEFAULT_ROOM_ID
      });
      this.memberProvider.addMember(this.member)
        .then().catch(function (error) {
        console.log("Error adding member", error);
      });
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

  /**
   * It sends the message
   */
  sendMessage() {
    console.log("Message", this.message);
    let message: Message = new Message({
      sender: this.member.email,
      roomId: this.member.roomId,
      message: this.message,
      time: new Date()
    });

    // Save message
    this.messageProvider.saveMessage(message)
      .then().catch(function (error) {
      console.log("Error saving message", error);
    });
  }

}
