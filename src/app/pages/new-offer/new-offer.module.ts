import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from '../../components/share.module';
import { NewOfferPageRoutingModule } from './new-offer-routing.module';
import { NewOfferPage } from './new-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOfferPageRoutingModule,
    ReactiveFormsModule,
    ShareModule,
  ],
  declarations: [NewOfferPage],
})
export class NewOfferPageModule {}
