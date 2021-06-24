import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntensidadePageRoutingModule } from './intensidade-routing.module';

import { IntensidadePage } from './intensidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntensidadePageRoutingModule
  ],
  declarations: [IntensidadePage]
})
export class IntensidadePageModule {}
