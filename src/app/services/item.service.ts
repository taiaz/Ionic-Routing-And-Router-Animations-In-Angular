import { Injectable } from '@angular/core';
import { OfferItem } from '../models/offer-item.model';
import { ItemOfferStore } from '../stores/item-offer.store';

const mockOffers = [
  {
    offerId: 0,
    title: 'Angebot 0',
    shortDescription: 'TESt 1234 very creative',
    image: 'assets/img3.jpeg',
    address: 'Rosengarten 45, 46123 Oberhausen',
  },
  {
    offerId: 1,
    title: 'Angebot 1',
    shortDescription: 'A place to grow roots and raise a family',
    image: 'assets/img2.jpeg',
    address: 'Rosengarten 45, 46123 Oberhausen',
  },
  {
    offerId: 2,
    title: 'Angebot 2',
    shortDescription: 'Cosy flat, in the sub urban area of the Neverland',
    image: 'assets/img1.jpeg',
    address: 'Gassenweg 1, 46123 Oberhausen',
  },
  {
    offerId: 3,
    title: 'Angebot 3',
    shortDescription: 'Cosy flat, in the sub urban area of the Neverland',
    image: 'assets/img4.jpeg',
    address: 'Gassenweg 1, 46123 Oberhausen',
  },
  {
    offerId: 4,
    title: 'Angebot 4',
    shortDescription: 'Urban home in the city center',
    image: 'assets/img5.jpeg',
    address: 'Stadt Weg 33a, 46123 Oberhausen',
  },
];

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor(private readonly immoStore: ItemOfferStore) {}

  getAll(): Promise<OfferItem[]> {
    return Promise.resolve(mockOffers);
  }

  async get(id: number): Promise<OfferItem> {
    return Promise.resolve(mockOffers[id]);
  }

  async update(item: OfferItem): Promise<number> {
    return this.immoStore.addOffer(item);
  }
}
