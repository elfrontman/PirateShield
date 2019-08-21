import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServicesService } from '../main-services.services';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	token: string;

	constructor(private router: Router, private mS: MainServicesService) { }

	ngOnInit() {
	}

	login(){
		this.mS.loginToken(this.token)
		.subscribe( data => {
			if(!data.error){
				this.router.navigateByUrl('/brands');			
				return;
			}

			alert('Sin sesion')
		})

	}

}
