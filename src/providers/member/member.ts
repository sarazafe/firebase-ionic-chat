import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Member } from '../../model/member';
import { Endpoints } from '../../constants/endpoints';

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
		return this.database.ref(Endpoints.MEMBERS).push().set(member);
	}

}
