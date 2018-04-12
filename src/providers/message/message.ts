import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Message} from "../../model/message";
import {Endpoints} from "../../constants/endpoints";
import {Chat} from "../../constants/chat";


/**
 * Provider for messages
 */
@Injectable()
export class MessageProvider {

  database: firebase.database.Database;

  constructor(public http: HttpClient) {
    this.database = firebase.database();
  }

  /**
   * It saves the message
   * @param {Message} message
   * @returns {Promise<any>}
   */
  saveMessage(message: Message): Promise<any> {
    //TODO: Save message
    // return this.getMessageReference().push().set(message);
    return null;
  }

  /**
   * It gets the reference to messages storage
   * @returns {firebase.database.Reference}
   */
  getMessageReference(): firebase.database.Reference {
    return this.database.ref(Endpoints.MESSAGES + Chat.DEFAULT_ROOM_ID);
  }

}
