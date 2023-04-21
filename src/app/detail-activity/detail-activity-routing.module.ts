import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailActivityComponent } from './detail-activity.component';

const routes: Routes = [{ path: '', component: DetailActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailActivityRoutingModule { }
