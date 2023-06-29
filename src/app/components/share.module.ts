import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CameraComponent } from './camera/camera.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { NavigationComponent } from './navigation/navigation.component';

const ALL_COMPONENTS = [
  ItemListingComponent,
  NavigationComponent,
  ItemGridComponent,
  CameraComponent,
  GalleryComponent,
];

@NgModule({
  declarations: ALL_COMPONENTS,
  exports: ALL_COMPONENTS,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ShareModule {}
