import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MainServicesService } from '../main-services.service';
import { CompressImage } from './CompressImage';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewChecked {

	@ViewChild('chatview', {static: false}) private chatview: any;


	message = '';
	username;
	messages:any = [];
	tokenUser = '';
	tokenOP;
	modalImage = false;
	imageSelected;

	constructor(private socket: Socket, private service: MainServicesService) { }

	ngAfterViewChecked(){
		//this.scrollBottom();
	}

	showImage(image) {
		this.imageSelected = image;
		this.modalImage = true;
	}

	ngOnInit() {
		this.username = localStorage.getItem('user_name')
		this.socket.connect();

		this.socket.fromEvent('chat-token').subscribe( (token:any) => {

			this.tokenUser = this.service.getUserId()
			this.tokenOP = localStorage.getItem('token')
			this.socket.emit('create', this.tokenUser)

			this.service.getChat(this.tokenUser)
				.subscribe( data => {
					console.log(data)
					this.messages = data;
					this.scrollBottom();
				})
		})

		this.socket.fromEvent('received').subscribe( message => {
			this.messages.push(message)
			this.scrollBottom();
		})

	}

	sendMessage(){
		const msg = {
			message: this.message,
			sender: Number(this.service.getUserId()),
			receiver: 1,
			type: "text",
			user_sender: this.username,
			user_receiver: "Admin",
			chat_id: this.tokenUser,
			operativo: this.tokenOP,
			createdAt: new Date()
		}

		console.log(msg)

		this.socket.emit('send-message', msg)
		this.messages.push(msg)
		this.message = '';
		this.scrollBottom();
	}

	sendImageMessage(file_input){

		const compress = new CompressImage(file_input.files[0], 1024, null);

		compress.getImage().then( f => {
			var reader = new FileReader();
			  reader.onloadend = (e) => {

				const msg = {
					message: reader.result,
					sender: Number(this.service.getUserId()),
					receiver: 1,
					type: 'image',
					user_sender: this.username,
					user_receiver: "Admin",
					chat_id: this.tokenUser,
					operativo: this.tokenOP,
					createdAt: new Date()
				}

				this.socket.emit('send-message', msg)
				this.messages.push(msg)
				this.scrollBottom();

			  };
			  reader.readAsDataURL(<Blob>f);
			});

		
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
