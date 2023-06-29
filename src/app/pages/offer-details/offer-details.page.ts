import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalNotifications } from "@capacitor/core";
import { PictureService } from "../../services/picture.service";
import { PictureItem } from "../../stores/picture-index-db.store";
import { OfferItem } from "../../models/offer-item.model";
import { FavouritesService } from "../../services/favourites.service";
import { ItemService } from "../../services/item.service";

@Component({
  selector: "app-offer-details",
  templateUrl: "./offer-details.page.html",
  styleUrls: ["./offer-details.page.scss"]
})
export class OfferDetailsPage implements OnInit {
  public item: OfferItem;
  public images: PictureItem[] = [];

  constructor(
    private readonly acr: ActivatedRoute,
    private readonly items: ItemService,
    private readonly favourites: FavouritesService,
    private readonly pictures: PictureService
  ) {}

  async ngOnInit() {
    const id = this.acr.snapshot.params.id;
    this.item = await this.favourites.get(Number.parseInt(id, 10));

    if (!this.item) {
      this.item = await this.items.get(id);
    }
    this.images = await this.pictures.loadOfferPictures(this.item.offerId);
    this.images.unshift({ path: this.item.image, offerId: 0 });
  }

  async onCapture($event: string) {
    if (!this.item.image) {
      this.item.image = $event;
      this.items.update(this.item);
    } else {
      const id = await this.pictures.savePicture($event, this.item.offerId);
      this.images.push({
        offerId: this.item.offerId,
        id: id + "",
        path: $event
      });
    }
  }

  async share() {
    try {
      // @ts-ignore
      await navigator.share({
        title: "title",
        url: window.location.toString(),
        text: "sharing some text"
      });
    } catch (err) {
      /*
        This error will appear if the user canceled the action of sharing.
      */
      alert(`Couldn't share ${err}`);
    }
  }

  // request permissions
  async notify() {
    await LocalNotifications.requestPermission();
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: "Some Title",
          body: "Some Content",
          id: 1,
          // id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 2) }
        }
      ]
    });
  }
}
