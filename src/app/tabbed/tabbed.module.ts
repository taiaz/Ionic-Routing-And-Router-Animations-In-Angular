import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabbedPageRoutingModule } from './tabbed-routing.module';

import { TabbedPage } from './tabbed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabbedPageRoutingModule
  ],
  declarations: [TabbedPage]
})
export class TabbedPageModule {}
