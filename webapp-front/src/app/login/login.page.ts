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

	token: string;
	toast: any;

	constructor(private router: Router, private mS: MainServicesService, public toastController: ToastController) { }

	ngOnInit() {
	}

	login(){

		this.mS.loginToken(this.token)
		.subscribe( (data:any) => {
			alert("asdasdasdasdasd--|-asdasdasd")
			if(!data.error){
				this.router.navigateByUrl('/brands');			
				return;
			}
		}, (error) => {
			this.showToast("");
		})

	}

	showToast(message) {
		console.log('la tost')
		this.toast = this.toastController.create({
			message: 'Token invalido',
			duration: 6000,
			showCloseButton: true,
			closeButtonText: 'Cerrar',
	      	animated:true,
	      	cssClass:"error-toast"
		}).then((toastData)=>{
			console.log(toastData);
			toastData.present();
		});
	}
	HideToast(){
		this.toast = this.toastController.dismiss();
	}

}
