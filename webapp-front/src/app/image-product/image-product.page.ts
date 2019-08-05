import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
	selector: 'app-image-product',
	templateUrl: './image-product.page.html',
	styleUrls: ['./image-product.page.scss'],
})
export class ImageProductPage implements OnInit {

	@ViewChild('slideProduct', {static: false}) slides: IonSlides;
	slideOpts

	constructor() {
		this.slideOpts = {
			initialSlide: 0,
			speed: 400,

		};
	}

	ngOnInit() {
	}

	onNextSlide(){
		this.slides.slideNext()
	}

	onPrevSlide(){
		this.slides.slidePrev();
	}

}
