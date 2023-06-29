import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomePage3Page } from './some-page3.page';

const routes: Routes = [
  {
    path: '',
    component: SomePage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomePage3PageRoutingModule {}
