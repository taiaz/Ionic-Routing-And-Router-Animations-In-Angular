import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabbed',
    pathMatch: 'full',
  },
  {
    path: 'tabbed',
    loadChildren: () => import('./tabbed/tabbed.module').then((m) => m.TabbedPageModule),
  },
  {
    path: 'offer-details',
    loadChildren: () =>
      import('./pages/offer-details/offer-details.module').then((m) => m.OfferDetailsPageModule),
  },
  {
    path: 'some-page1',
    loadChildren: () =>
      import('./pages/some-page1/some-page1.module').then((m) => m.SomePage1PageModule),
  },
  {
    path: 'some-page2',
    loadChildren: () =>
      import('./pages/some-page2/some-page2.module').then((m) => m.SomePage2PageModule),
  },
  {
    path: 'some-page3',
    loadChildren: () =>
      import('./pages/some-page3/some-page3.module').then((m) => m.SomePage3PageModule),
  },
  {
    path: 'another-page',
    loadChildren: () =>
      import('./pages/another-page/another-page.module').then((m) => m.AnotherPagePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
