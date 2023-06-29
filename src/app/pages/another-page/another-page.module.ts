import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotherPagePageRoutingModule } from './another-page-routing.module';

import { AnotherPagePage } from './another-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherPagePageRoutingModule
  ],
  declarations: [AnotherPagePage]
})
export class AnotherPagePageModule {}
