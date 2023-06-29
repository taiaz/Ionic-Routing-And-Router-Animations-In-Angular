import { OfferItem } from '../models/offer-item.model';

export interface ImmoStorage {
  getOffers(): Promise<OfferItem[]>;
  getOffer(id: number): Promise<OfferItem>;
  addOffer(offer: OfferItem): Promise<number>;
  updateOffer(offer: OfferItem): Promise<number>;
  deleteOffer(offer: OfferItem): Promise<boolean>;
}
