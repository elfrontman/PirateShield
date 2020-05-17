import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MainServicesService } from './../main-services.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	token: string = 'kAJXc4';
	user_name: string;
	toast: any;

	constructor(private router: Router, private mS: MainServicesService, public toastController: ToastController) { }

	ngOnInit() {
	}

	login(){

		this.mS.loginToken(this.token, this.user_name)
		.subscribe( (data:any) => {

			if(!data.error){
				this.mS.setIpClient(data.ip)
				this.mS.setSessionId(data.session_id)
				this.router.navigateByUrl('/terminos');			
				return;
			}
		}, error => {
			this.showToast("");
		})

	}

	showToast(message) {
		this.toast = this.toastController.create({
			message: 'Token invalido',
			duration: 6000,
			showCloseButton: true,
			closeButtonText: 'Cerrar',
	      	animated:true,
	      	cssClass:"error-toast"
		}).then((toastData)=>{
			toastData.present();
		});
	}
	HideToast(){
		this.toast = this.toastController.dismiss();
	}

}
