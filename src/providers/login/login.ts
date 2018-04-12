import { Injectable } from '@angular/core';
import { Endpoints } from '../../constants/endpoints';

import * as firebase from 'firebase';
import { User } from '../../model/user';

/**
 * Login provider
 */
@Injectable()
export class LoginProvider {

	auth: firebase.auth.Auth;

	constructor() {
		this.auth = firebase.auth();
	}

	/**
	 * Sign up the user
	 * @param user the user
	 */
	signUp(user: User): Promise<any>{
	  //TODO: Singup
		// return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    return null;
	}

	/**
	 * Login the user
	 * @param user the user
	 */
	login(user: User): Promise<any> {
	  // TODO: Login
		// return this.auth.signInWithEmailAndPassword(user.email, user.password);
    return null;
	}

}
