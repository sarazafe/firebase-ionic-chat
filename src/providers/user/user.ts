import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { User } from '../../model/user';
import { Endpoints } from '../../constants/endpoints';

/**
 * User provider
*/
@Injectable()
export class UserProvider {

	database: firebase.database.Database;

	constructor() {
		this.database = firebase.database();
	}

	/**
	 * It saves the user in database
	 * @param user the user
	 */
	saveUser(user: User): Promise<any> {
		return this.database.ref(Endpoints.USERS + user.uid).set(user);
	}

}
