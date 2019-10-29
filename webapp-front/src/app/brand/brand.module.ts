import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrandPage } from './brand.page';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BrandPage
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
  declarations: [BrandPage]
})
export class BrandPageModule {}
