import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomProvider } from '../../providers/room/room';

/**
 * Chat page
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    @Input('username')
    username: string;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private roomProvider: RoomProvider) {

    }

    ionViewDidLoad() {
        // Init the room
        this.roomProvider.initRoom()
            .then(() => {
                // Add user to the room
            })
            .catch(function (error) {
                console.log("Init room error", error);
            });
    }

}