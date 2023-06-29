import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { ShareModule } from '../../components/share.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ShareModule, SearchPageRoutingModule],
  declarations: [SearchPage],
})
export class SearchPageModule {}
