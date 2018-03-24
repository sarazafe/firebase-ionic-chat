import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = HomePage;

	config = {
		apiKey: 'AAAAgrL4-mo:APA91bEkuFuBkdFtsF-FGkebkiaL29lg_bhr4zrL40xX0J-a1iQL2XAlVZtEN7nGGWlU5-hB-CCQCRYgYu3xmM9cPr6eQ3OuhRAr6L3juxzo4Ba14yzkjpoBTUfeTyo2GHzl1uDkMlsq',
		authDomain: 'chat-59245.firebaseapp.com',
		databaseURL: 'https://chat-59245.firebaseio.com/',
		projectId: 'chat-59245',
		storageBucket: '',
	};

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});

		// Initialize firebase
		firebase.initializeApp(this.config);
	}
}

