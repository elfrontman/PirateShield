import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MainServicesService } from '../main-services.service';

@Component({
	selector: 'app-detail-image',
	templateUrl: './detail-image.page.html',
	styleUrls: ['./detail-image.page.scss'],
})
export class DetailImagePage implements OnInit {

	images_check: any = [];
	images_fail: any = [];
	description;
	slideOpts;
	loadModule:boolean;
	product;
	prevUrl;

	constructor(private currRouter: ActivatedRoute, private service: MainServicesService) { 
		this.slideOpts = {
			initialSlide: 0,
			speed: 400,
		};


	}

	goBack(){
		this
	}

	ngOnInit() {
		this.currRouter.params.subscribe( params => {
			this.prevUrl = ['/product', params.id_product]

			this.service.getProduct(params.id_product)
			.subscribe( data => {
				this.product = data


				this.service.getDetailMarkerProduct(params.id).subscribe( (data:any) => {

					this.images_check = data.detail_images.filter( x => x.type_image == 1)
					this.images_fail = data.detail_images.filter( x => x.type_image == 2)

					this.description = data.description
					this.loadModule = true;

				})
			})
			
		})
	}

}
