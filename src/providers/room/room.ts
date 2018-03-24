import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Endpoints } from '../../constants/endpoints';
import { Chat } from '../../constants/chat';
import { Room } from '../../model/room';

/**
 * Provider for rooms
 */
@Injectable()
export class RoomProvider {

	database: firebase.database.Database;

	constructor(public http: HttpClient) {
		this.database = firebase.database();
	}

	/**
	 * It initializes the room. It saves the room in database
	 */
	initRoom() {
		return this.database.ref(Endpoints.ROOMS + Chat.DEFAULT_ROOM_ID).set(new Room(Chat.DEFAULT_ROOM_ID, Chat.DEFAULT_ROOM_NAME));
	}

}
