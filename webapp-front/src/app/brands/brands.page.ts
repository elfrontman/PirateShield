import { Component, OnInit } from '@angular/core';
import { MainServicesService } from './../main-services.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.page.html',
  styleUrls: ['./brands.page.scss'],
})
export class BrandsPage implements OnInit {

	brands = []
  filter_brands;
  categories;
  filter_categories;
  filter_name;

  constructor(private service: MainServicesService) { 
    
  }

  ngOnInit() {
    this.service.getBrands().subscribe( (data:any) => {
      this.brands = data
      this.filter_brands = this.brands;
    })

    this.service.getCategoriesBrand().subscribe( (data:any) => {
      this.categories = data;
    })
  }

  filterCategories(){
    this.filter_brands = this.brands;

    if(this.filter_categories.length > 0){
      this.filter_brands = this.brands.filter( x => this.filter_categories.indexOf(x.brand_category_id.id) > -1);
    }
    
  }

  filterName(){
    this.filter_brands = this.brands;

    if(this.filter_name.length > 0){
      this.filter_brands = this.brands.filter( x => this.filter_name.toLowerCase().indexOf(x.name.toLowerCase()) > -1);
    }

  }

}
