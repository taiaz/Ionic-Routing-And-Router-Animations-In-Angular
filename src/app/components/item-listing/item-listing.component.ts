import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { OfferItem } from '../../models/offer-item.model';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss'],
})
export class ItemListingComponent {
  @Input() items: OfferItem[];

  constructor(private readonly toast: ToastController, private favourites: FavouritesService) {}

  async mark(item: OfferItem) {
    const id = await this.favourites.checkAndAdd(item);
    const message = `Added #${item.offerId} to favouites`;
    const toast = await this.toast.create({
      message,
      duration: 1000,
      color: 'dark',
      translucent: false,
    });
    await toast.present();
  }
}
