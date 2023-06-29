import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SomePage3PageRoutingModule } from './some-page3-routing.module';

import { SomePage3Page } from './some-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SomePage3PageRoutingModule
  ],
  declarations: [SomePage3Page]
})
export class SomePage3PageModule {}
