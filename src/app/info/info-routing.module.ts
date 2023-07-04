import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Info } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: Info,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {}
