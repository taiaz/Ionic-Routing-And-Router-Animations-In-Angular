import { Injectable } from '@angular/core';
import { OfferItem } from '../models/offer-item.model';
import { ImmoStorage } from './immo-store.interface';

@Injectable({ providedIn: 'root' })
export abstract class ItemOfferStore implements ImmoStorage {
  abstract getOffers(): Promise<OfferItem[]>;
  abstract addOffer(offer: OfferItem): Promise<number>;
  abstract deleteOffer(offer: OfferItem): Promise<boolean>;
  abstract updateOffer(item: OfferItem);
  abstract getOffer(id: number): Promise<OfferItem>;
}
