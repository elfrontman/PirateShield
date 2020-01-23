import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Location } from '@angular/common';


@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

	@Input() backRoute;
	tokenUser;

	constructor(private location: Location, private socket: Socket) { }

	ngOnInit() {
		this.tokenUser = localStorage.getItem('token_chat')
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
			
		}
		console.log(file_input.files[0])
		reader.readAsDataURL(file_input.files[0]);
		
	}

	goBack(){
		this.location.back();
	}

}
