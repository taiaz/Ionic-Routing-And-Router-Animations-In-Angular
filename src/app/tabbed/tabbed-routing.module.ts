import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from '../guards/access.guard';
import { TabbedPage } from './tabbed.page';

const routes: Routes = [
  {
    path: '',
    component: TabbedPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'favourites',
        loadChildren: () =>
          import('../pages/fav-list/fav-list.module').then((m) => m.FavListPageModule),
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'new-offer',
        canActivate: [AccessGuard],
        loadChildren: () =>
          import('../pages/new-offer/new-offer.module').then((m) => m.NewOfferPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabbedPageRoutingModule {}
