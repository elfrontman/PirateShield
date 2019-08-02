import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-brand',
	templateUrl: './brand.page.html',
	styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {

	productos = []

	constructor() {
		for(let i = 0; i < 10; i++){
			this.productos.push({
				name: "Camiseta millonarios",
				ref: "12345-12345-123545",
				image: "./assets/images/imagen_producto.png"
			})
		}
	}

	ngOnInit() {
	}

}
