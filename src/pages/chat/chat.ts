import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomProvider } from '../../providers/room/room';
import { MemberProvider } from '../../providers/member/member';
import { Member } from '../../model/member';
import { Chat } from '../../constants/chat';

/**
 * Chat page
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    username: string;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private roomProvider: RoomProvider,
        private memberProvider: MemberProvider) {
            this.username = this.navParams.get('username');
    }

    ionViewDidLoad() {
        // Init the room
        this.roomProvider.initRoom().then(() => {
            // Add user to the room
            this.memberProvider.addMember(new Member(this.username, Chat.DEFAULT_ROOM_ID));
        }).catch(function (error) {
            console.log("Init room error", error);
        });
    }

}