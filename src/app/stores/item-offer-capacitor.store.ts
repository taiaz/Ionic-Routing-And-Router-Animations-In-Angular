import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { environment } from '../../environments/environment';
import { OfferItem } from '../models/offer-item.model';
import { ItemOfferStore } from './item-offer.store';

const { Storage } = Plugins;

// General storage using simple blob --> cordova storage handles all the rest
@Injectable({ providedIn: 'root' })
export class ItemOfferCapacitorStorage extends ItemOfferStore {
  protected prefix = environment.storagePrefix;
  readonly offerKey = `${this.prefix}Offers`;

  constructor() {
    super();
    Storage.keys().then(({ keys }) => {
      if (!keys.includes(this.offerKey)) {
        Storage.set({ key: this.offerKey, value: JSON.stringify([]) });
      }
    });
  }

  async getOffers(): Promise<OfferItem[]> {
    const result = await Storage.get({ key: this.offerKey });
    return JSON.parse(result.value);
  }

  async getOffer(id: number): Promise<OfferItem> {
    const result = await Storage.get({ key: this.offerKey });
    return JSON.parse(result.value).find(({ offerId }) => offerId == id);
  }

  async addOffer(offer: OfferItem): Promise<number> {
    const offers = await this.getOffers();
    offers.push(offer);
    Storage.set({ key: this.offerKey, value: JSON.stringify(offers) });
    return offers.length;
  }

  async updateOffer(offer: OfferItem): Promise<number> {
    const offers = (await this.getOffers()) as OfferItem[];
    const offeridx = offers.findIndex(({ offerId }) => offerId == offer.offerId);
    offers.splice(offeridx, 1, offer);
    Storage.set({ key: this.offerKey, value: JSON.stringify(offers) });
    return offeridx;
  }

  async deleteOffer(offer: OfferItem): Promise<boolean> {
    const offers = (await this.getOffers()) as OfferItem[];
    const offeridx = offers.findIndex(({ offerId }) => offerId == offer.offerId);
    offers.splice(offeridx, 1);
    return true;
  }
}
