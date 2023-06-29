import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherPagePage } from './another-page.page';

const routes: Routes = [
  {
    path: '',
    component: AnotherPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherPagePageRoutingModule {}
