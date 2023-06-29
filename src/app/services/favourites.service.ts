import { Injectable } from '@angular/core';
import { OfferItem } from '../models/offer-item.model';
import { ItemOfferStore } from '../stores/item-offer.store';

@Injectable({ providedIn: 'root' })
export class FavouritesService {
  constructor(private readonly immoStore: ItemOfferStore) {}

  async getAll(): Promise<OfferItem[]> {
    return await this.immoStore.getOffers();
  }

  async get(id: number): Promise<OfferItem> {
    const item = await this.immoStore.getOffer(id);
    return item;
  }

  async update(item: OfferItem): Promise<number> {
    return this.immoStore.addOffer(item);
  }

  async checkAndAdd(item: OfferItem) {
    const existingOffer = await this.immoStore.getOffer(item.offerId);
    if (!existingOffer) {
      return this.immoStore.addOffer(item);
    } else {
      return this.immoStore.updateOffer(item);
    }
  }
}
