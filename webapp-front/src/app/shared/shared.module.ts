import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { SquaredMarkerDirective } from './squared-marker.directive';

@NgModule({
  declarations: [
    FooterComponent,
    SanitizeHtmlPipe,
    SquaredMarkerDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    SanitizeHtmlPipe,
    SquaredMarkerDirective
  ]
})
export class SharedModule { }
