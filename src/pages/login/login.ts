import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { User } from '../../model/user';
import { UserProvider } from '../../providers/user/user';

import { ChatPage } from './../chat/chat';

/**
 * Login page
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	loginForm: FormGroup;
	visible: boolean;

	constructor(public navCtrl: NavController,
		private formBuilder: FormBuilder,
		private loginProvider: LoginProvider,
		private userProvider: UserProvider) {
		this.loginForm = this.formBuilder.group({
			mail: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	/**
	 * Sign up the user
	 */
	signUp() {
		let username: string = this.loginForm.value['mail'];
		let password: string = this.loginForm.value['password'];
		let user: User = new User(username, password);
		this.loginProvider.signUp(new User(username, password))
			.then(value => {
				user.uid = value.uid;
				// remove password, for not storing without encrypting
				user.password = '';
				this.userProvider.saveUser(user).then(res => {
					this.navCtrl.push(ChatPage, {
						username: value.email
					});
				});
			})
			.catch(function (error) {
				console.log("Signup error", error);
			});
	}

	/**
	 * Do login
	 */
	doLogin() {
		let username: string = this.loginForm.value['mail'];
		let password: string = this.loginForm.value['password'];
		let user: User = new User(username, password);
		this.loginProvider.login(user)
			.then(value => {
				this.navCtrl.push(ChatPage, {
					username: value.email
				});
			}).catch(function (error) {
				console.log("Login error", error);
			});
	}

	changeVisibility() {
		this.visible = !this.visible;
	}

}
