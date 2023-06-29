import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomePage1Page } from './some-page1.page';

const routes: Routes = [
  {
    path: '',
    component: SomePage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomePage1PageRoutingModule {}
