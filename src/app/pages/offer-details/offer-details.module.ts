import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferDetailsPageRoutingModule } from './offer-details-routing.module';

import { OfferDetailsPage } from './offer-details.page';
import { ShareModule } from '../../components/share.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OfferDetailsPageRoutingModule, ShareModule],
  declarations: [OfferDetailsPage],
})
export class OfferDetailsPageModule {}
