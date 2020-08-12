import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServicesService } from './../main-services.service';
import { AlertController } from '@ionic/angular';

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

  constructor(private service: MainServicesService, private router: Router, public alertController: AlertController) { 
    
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

  filterName() {
    this.filter_brands = this.brands;

    if (this.filter_name.length > 0) {
      this.filter_brands = this.brands.filter(x => {
        const search = this.filter_name.toLowerCase();
        const nameBrand = search.indexOf(x.name.toLowerCase()) > -1
          || search.indexOf(x.description ? x.description.toLowerCase() : null) > -1;

        if (nameBrand) {
          return true;
        }

        const produts = x.products.filter(prd => {

          const exist = prd.name.toLowerCase().indexOf(search) > -1
          || (prd.reference ? prd.reference.toLowerCase().indexOf(search)  > -1 : false)
              || (prd.description ? prd.description.toLowerCase().indexOf(search) > -1 : false);
          

          return exist;
        });

        return produts.length > 0;

      });
    }

  }

  async alertLogout(){
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Desea cerrar la sesión?',
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        
      }, {
        text: 'Aceptar',
        handler: () => {
          this.logout()
        }
      }
      ]
    });

    await alert.present();
  }

  logout(){
    this.service.logOut().subscribe( data => {
      sessionStorage.removeItem('session_id')
      this.router.navigate(['/login'])
    });
  }


}
