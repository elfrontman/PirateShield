import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { environment } from './../../environments/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SocketIoModule.forRoot(environment.SoketIoConfig)
  ],
  declarations: [ChatPage, ModalImageComponent]
})
export class ChatPageModule {}
