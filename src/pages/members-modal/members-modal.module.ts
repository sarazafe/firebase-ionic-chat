import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersModalPage } from './members-modal';

@NgModule({
  declarations: [
    MembersModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersModalPage),
  ],
})
export class MembersModalPageModule {}
