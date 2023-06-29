import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OfferItem } from '../../models/offer-item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  allItems: OfferItem[];
  filter$ = new Subject<CustomEvent>();
  filteredItems$: Observable<OfferItem[]>;

  constructor(public readonly items: ItemService) {}

  async ngOnInit() {
    this.allItems = await this.items.getAll();
    this.filteredItems$ = this.filter$.pipe(
      map(({ detail }) =>
        detail.value && detail.value.length
          ? this.allItems.filter(
              ({ title, offerId, shortDescription, address }) =>
                title.includes(detail.value) ||
                offerId == detail.value ||
                shortDescription.includes(detail.value) ||
                address.includes(detail.value),
            )
          : this.allItems,
      ),
      startWith(this.allItems),
    );
  }
}
