import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MainServicesService } from '../main-services.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

	message = '';
	messages = [];
	tokenUser = '';

	constructor(private socket: Socket, private service: MainServicesService) { }

	ngOnInit() {
		this.socket.connect();

		this.socket.fromEvent('chat-token').subscribe( (token:any) => {
			
			this.service.setTokentChat(token.token)
				.subscribe( (data:any) => {
					if(data.created){
						localStorage.setItem('token_chat', token.token);
					}

					this.tokenUser = localStorage.getItem('token_chat')
					this.socket.emit('create', this.tokenUser)

				})
		})

		this.socket.fromEvent('received').subscribe( message => {
			this.messages.push(message)
		})
	}

	sendMessage(){
		this.socket.emit('send-message', {text: this.message, token: this.tokenUser})
		this.messages.push({text: this.message, token: this.tokenUser})
		this.message = '';
	}

	ionViewWillLeave(){
		this.socket.disconnect();
	}

}
