import { Component, Input } from "@angular/core";
import { PictureItem } from "../../stores/picture-index-db.store";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent {
  @Input() images: PictureItem[];
}
