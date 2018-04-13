import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginProvider } from '../providers/login/login';
import { LoginPage } from '../pages/login/login';
import { RoomProvider } from '../providers/room/room';
import { UserProvider } from '../providers/user/user';
import { LoginPageModule } from '../pages/login/login.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { HttpClientModule } from '@angular/common/http';
import { MemberProvider } from '../providers/member/member';
import { MessageProvider } from '../providers/message/message';
import {MembersModalPageModule} from "../pages/members-modal/members-modal.module";

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    ChatPageModule,
    MembersModalPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    RoomProvider,
    UserProvider,
    MemberProvider,
    MessageProvider
  ]
})
export class AppModule { }
