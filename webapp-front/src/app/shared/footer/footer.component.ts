import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Location } from '@angular/common';
import { MainServicesService } from 'src/app/main-services.service';


@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

	@Input() backRoute;
	tokenUser;
	unReadMessages = 0;

	constructor(private location: Location, private socket: Socket, private service: MainServicesService) { }

	ngOnInit() {

		this.unReadMessages = Number(localStorage.getItem('unReadMessages'));
		this.service.setUnReadMessages(this.unReadMessages);

		this.service.getUnReadMessages().subscribe(value => {
			this.unReadMessages = value;
		});

		this.tokenUser = this.service.getUserId();
		this.socket.connect();

		this.socket.emit('create', this.tokenUser)
		this.socket.fromEvent('received').subscribe(message => {
			this.unReadMessages++;
			this.service.setUnReadMessages(this.unReadMessages);
		})
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
