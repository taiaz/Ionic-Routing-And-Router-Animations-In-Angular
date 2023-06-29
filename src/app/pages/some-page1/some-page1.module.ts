import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SomePage1PageRoutingModule } from './some-page1-routing.module';

import { SomePage1Page } from './some-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SomePage1PageRoutingModule
  ],
  declarations: [SomePage1Page]
})
export class SomePage1PageModule {}
