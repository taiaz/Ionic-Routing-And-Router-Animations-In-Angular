import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomePage2Page } from './some-page2.page';

const routes: Routes = [
  {
    path: '',
    component: SomePage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomePage2PageRoutingModule {}
