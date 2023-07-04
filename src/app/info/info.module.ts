import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Info } from './info.page';

import { InfoRoutingModule } from './info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InfoRoutingModule
  ],
  declarations: [Info]
})
export class InfoModule {}
