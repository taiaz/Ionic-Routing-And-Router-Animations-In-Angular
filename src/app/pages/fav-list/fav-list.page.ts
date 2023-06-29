import { Component, OnInit } from '@angular/core';
import { OfferItem } from '../../models/offer-item.model';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.page.html',
  styleUrls: ['./fav-list.page.scss'],
})
export class FavListPage implements OnInit {
  items$: Promise<OfferItem[]>;

  constructor(private readonly favourites: FavouritesService) {}

  // add enter callback to load / refresh items
  async ionViewWillEnter() {
    this.ngOnInit();
  }

  async ngOnInit() {
    this.items$ = this.favourites.getAll();
  }
}
