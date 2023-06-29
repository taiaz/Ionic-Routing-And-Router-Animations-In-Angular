import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SomePage2PageRoutingModule } from './some-page2-routing.module';

import { SomePage2Page } from './some-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SomePage2PageRoutingModule
  ],
  declarations: [SomePage2Page]
})
export class SomePage2PageModule {}
