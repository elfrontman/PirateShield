import { Component, OnInit } from '@angular/core';
import { MainServicesService } from './../main-services.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.page.html',
  styleUrls: ['./brands.page.scss'],
})
export class BrandsPage implements OnInit {

	brands = []

  constructor(private service: MainServicesService) { }

  ngOnInit() {
    this.service.getBrands().subscribe( (data:any) => {
      this.brands = data
    })
  }

}
