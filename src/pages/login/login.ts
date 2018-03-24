import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { User } from '../../model/user';

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
		private loginProvider: LoginProvider) {
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
		this.loginProvider.signUp(new User(username, password))
			.then(value => {
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
		this.loginProvider.login(new User(username, password))
			.then(value => {
			})
			.catch(function (error) {
				console.log("Login error", error);
			});
	}

	changeVisibility() {
		this.visible = !this.visible;
	}

}
