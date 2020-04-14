import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MainServicesService } from '../main-services.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewChecked {

	@ViewChild('chatview', {static: false}) private chatview: any;


	message = '';
	messages:any = [];
	tokenUser = '';

	constructor(private socket: Socket, private service: MainServicesService) { }

	ngAfterViewChecked(){
		//this.scrollBottom();
	}

	ngOnInit() {
		this.socket.connect();

		console.log('init', this.socket)

		this.socket.fromEvent('chat-token').subscribe( (token:any) => {

			console.log(token)
			
			this.service.setTokentChat(token.token)
				.subscribe( (data:any) => {
					if(data.created){
						localStorage.setItem('token_chat', token.token);
					}else{
						if(data.token)
							localStorage.setItem('token_chat', data.token);	
					}



					this.tokenUser = localStorage.getItem('token_chat')
					this.socket.emit('create', this.tokenUser)

					this.service.getChat(this.tokenUser)
						.subscribe( data => {
							console.log(data)
							this.messages = data;
							this.scrollBottom();
						})

				})
		})

		this.socket.fromEvent('received').subscribe( message => {
			this.messages.push(message)
			this.scrollBottom();
		})

	}

	sendMessage(){
		let msg = {message: this.message, token: this.tokenUser, type: 'String'}
		this.socket.emit('send-message', msg)
		this.messages.push(msg)
		this.message = '';
		this.scrollBottom();
	}

	sendImageMessage(file_input){

		let reader = new FileReader();

		reader.onload = (evt:any) =>{
			var msg = {
				token: this.tokenUser,
				message: evt.target.result,
				type: 'Image'
			}
			console.log(msg)
			this.socket.emit('send-file', msg)
			this.messages.push(msg)
		}
		console.log(file_input.files[0])
		reader.readAsDataURL(file_input.files[0]);
		this.scrollBottom();
	}

	ionViewWillLeave(){
		this.socket.disconnect();
	}

	scrollBottom(){
		try{
			setTimeout( _ => {
				this.chatview.el.scrollToBottom(0)				
			})
			
		}catch(err){ console.log(err) }
	}

}
