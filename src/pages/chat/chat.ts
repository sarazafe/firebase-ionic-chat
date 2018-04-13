import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {RoomProvider} from '../../providers/room/room';
import {MemberProvider} from '../../providers/member/member';
import {Member} from '../../model/member';
import {Chat} from '../../constants/chat';
import {User} from "../../model/user";
import {Message} from "../../model/message";
import {MessageProvider} from "../../providers/message/message";
import {Content} from 'ionic-angular';
import {MembersModalPage} from "../members-modal/members-modal";

/**
 * Chat page
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content)
  content: Content;

  user: User;
  members: Member[];
  message: string;
  member: Member;
  messages: Message[];

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams,
              private roomProvider: RoomProvider,
              private memberProvider: MemberProvider,
              private messageProvider: MessageProvider,
              private modalCtrl: ModalController) {
    this.user = this.navParams.get('user');
    this.members = [];
    this.message = '';
    this.messages = [];
  }

  ionViewDidLoad() {
    // Init the room
    this.initRoom();

    // When the list of members grows up, add to the list of members
    this.onNewMember();

    // When a message has been sent, add to the list of messages
    this.onNewMessage();

    // Scroll to bottom when an element is inserted in the DOM
    let chatContent = document.getElementsByClassName('chat-content')[0];
    if (!chatContent) {
      return;
    }
    chatContent.addEventListener("DOMNodeInserted", () => {
        this.scrollToBottom();
    });
  }

  /**
   * It scrolls the content to bottom
   */
  scrollToBottom() {
    setTimeout(()=>this.content.scrollToBottom(300), 500);

  }

  close() {
    this.viewCtrl.dismiss();
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
   * It gets the color of the member
   * @param {Message} message
   * @returns {string}
   */
  getMemberFontColor(message: Message){
    return message.color;
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
      time: new Date(),
      color: this.member.color
    });

    // Save message
    this.messageProvider.saveMessage(message)
      .then(()=> {
        // Clean sent message
        this.message = '';
      }).catch(function (error) {
      console.log("Error saving message", error);
    });
  }

  /**
   * It opens a dialog with all members
   */
  showMembers(){
    this.modalCtrl.create(MembersModalPage, {'members': this.members}).present();
  }

  /**
   * It initializes the room and add the user to it
   */
  private initRoom() {
    this.roomProvider.initRoom().then(() => {
      // Add user to the room it he/she has not been added
      if (!this.member) {
        this.member = new Member({
          uid: this.user.uid,
          email: this.user.email,
          roomId: Chat.DEFAULT_ROOM_ID,
          color: ('#' + Math.floor(Math.random() * 16777215).toString(16))
        });
        this.memberProvider.addMember(this.member)
          .then().catch(function (error) {
          console.log("Error adding member", error);
        });
      }
    }).catch(function (error) {
      console.log("Init room error", error);
    });
  }

  /**
   * It receives new member added to the room
   */
  private onNewMember() {
    this.memberProvider.getMemberReference().on('child_added', (val) => {
      let member: Member = new Member(val.val());
      if (this.user.email === member.email) {
        this.member = member;
      }
      this.members.push(new Member(val.val()));
    });
  }

  /**
   *  It receives new message and add to the list of messages
   */
  private onNewMessage() {
    this.messageProvider.getMessageReference().on('child_added', (val) => {
      let message: Message = new Message(val.val());
      if (this.member.email === message.sender) {
        message.position = 'right';
      } else {
        message.position = 'left';
      }
      this.messages.push(message);
    });
  }

}
