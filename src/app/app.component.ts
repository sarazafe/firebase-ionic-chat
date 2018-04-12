import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// TODO: Add firebase
// import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';

import { FirebaseConfig } from '../constants/firebase-config';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = LoginPage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});

		// TODO: Initialize firebase
		// firebase.initializeApp(FirebaseConfig);
	}
}

