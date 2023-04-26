import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewActivityComponent } from './new-activity.component';

const routes: Routes = [{ path: '', component: NewActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewActivityRoutingModule { }
