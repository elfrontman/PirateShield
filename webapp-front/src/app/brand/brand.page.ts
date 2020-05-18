import { Component, OnInit } from '@angular/core';
import {  MainServicesService } from './../main-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-brand',
	templateUrl: './brand.page.html',
	styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {

	productos = []
	brand;

	constructor(private service: MainServicesService, private route: ActivatedRoute, private router:Router) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			
			this.service.getBrandById(params.id)
			.subscribe( (data:any) => {
				console.log(data);
				this.brand = data;
				this.getProducts();
			})	
		})
	}

	getProducts(){
		this.service.getProductsByBrand(this.brand.id)
		.subscribe( (data:any) => {
			this.productos = data;
		})
	}

	
	logout(){
		this.service.logOut().subscribe( data => {
			sessionStorage.removeItem('session_id')
			this.router.navigate(['/login'])
		});
	}

}
