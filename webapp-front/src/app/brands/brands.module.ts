import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrandsPage } from './brands.page';
import { SharedModule } from './../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: BrandsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrandsPage]
})
export class BrandsPageModule {}
