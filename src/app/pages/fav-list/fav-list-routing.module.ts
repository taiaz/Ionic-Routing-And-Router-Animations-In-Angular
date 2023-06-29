import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavListPage } from './fav-list.page';

const routes: Routes = [
  {
    path: '',
    component: FavListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavListPageRoutingModule {}
