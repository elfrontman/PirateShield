import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.page.html',
  styleUrls: ['./brands.page.scss'],
})
export class BrandsPage implements OnInit {

	brands = []

  constructor() { 

  	for(let i = 0; i < 10; i++){
  		this.brands.push({
  			name: "Adidas",
  			category: "Ropa deportiva",
  			image: "./assets/images/marca.png"
  		})
  	}
  }

  ngOnInit() {
  }

}
