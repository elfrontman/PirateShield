import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MainServicesService } from './../main-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-image-product',
	templateUrl: './image-product.page.html',
	styleUrls: ['./image-product.page.scss'],
})
export class ImageProductPage implements OnInit {

	@ViewChild('slideProduct', {static: false}) slides: IonSlides;
	slideOpts
	product;
	loadModule;
	prevUrl;

	constructor(private service:MainServicesService, private route:ActivatedRoute, private router: Router) {
		this.slideOpts = {
			initialSlide: 0,
			speed: 400,

		};
	}

	ngOnInit() {
		this.route.params.subscribe( params => {
			this.prevUrl = ['/brand', params.id]
			this.service.getProduct(params.id)
				.subscribe( data => {
					this.product = data[0]
					this.loadModule = true;
				})
		})
	}

	onNextSlide(){
		this.slides.slideNext()
	}

	onPrevSlide(){
		this.slides.slidePrev();
	}

	logout(){
		this.service.logOut().subscribe( data => {
			sessionStorage.removeItem('session_id')
			this.router.navigate(['/login'])
		});
	}

}
