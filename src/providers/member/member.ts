import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import * as firebase from 'firebase';
import {Member} from '../../model/member';
import {Endpoints} from '../../constants/endpoints';
import {Chat} from "../../constants/chat";

/**
 * Provider for members of a room
 */
@Injectable()
export class MemberProvider {

  database: firebase.database.Database;

  constructor(public http: HttpClient) {
    this.database = firebase.database();
  }

  /**
   * It adds a member to the room
   * @param member the member
   */
  addMember(member: Member): Promise<any> {
    // TODO: add member
    // return this.database.ref(Endpoints.MEMBERS + member.roomId + "/" + member.uid).set(member);
    return null;
  }

  /**
   * It gets the reference to members list
   * @returns {firebase.database.Reference}
   */
  getMemberReference(): firebase.database.Reference {
    return this.database.ref(Endpoints.MEMBERS + Chat.DEFAULT_ROOM_ID);

  }

}
