import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { OfferItem } from '../../models/offer-item.model';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ItemGridComponent {
  @Input() items: OfferItem[];

  constructor(private readonly toast: ToastController, private favourites: FavouritesService) {}

  async mark(item: OfferItem) {
    const id = await this.favourites.update(item);
    const toast = await this.toast.create({
      message: `added #${item.offerId} ${id}to favourites`,
      duration: 1000,
      color: 'light',
      translucent: true,
    });
    toast.present();
  }
}
