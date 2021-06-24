import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntensidadePage } from './intensidade.page';

const routes: Routes = [
  {
    path: '',
    component: IntensidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntensidadePageRoutingModule {}
