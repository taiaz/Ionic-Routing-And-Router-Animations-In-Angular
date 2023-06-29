import { Injectable, InjectionToken } from '@angular/core';
import Dexie from 'dexie';

export const PICTURE_STORE_TOKEN = new InjectionToken<PictureStore>('Picture Store');

export interface PictureStore {
  getPicture(id: number): Promise<PictureItem>;
  savePicture(picture: PictureItem, id?: number): Promise<number>;
  getPictureForOffer(offerId: number): Promise<PictureItem[]>;
}

export interface PictureItem {
  path: string;
  offerId: number;
  id?: string;
}

@Injectable()
export class PictureIndexDbStore extends Dexie implements PictureStore {
  private pictures: Dexie.Table<PictureItem, number>;

  constructor() {
    super('ImmoPictureDexie', { autoOpen: true });
    this.version(1).stores({
      pictures: '++id, offerId',
    });
    this.pictures = this.table('pictures');
  }

  async savePicture(picture: PictureItem, id?: number): Promise<number> {
    return this.pictures.add(picture);
  }

  async getPicture(id: number): Promise<PictureItem> {
    return this.pictures.get(id);
  }

  async getPictureForOffer(offerId: number): Promise<PictureItem[]> {
    return this.pictures.filter(({ offerId: oid }) => oid === offerId).toArray();
  }
}
