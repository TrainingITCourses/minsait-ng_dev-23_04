import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

// /cumbre-vieja-exploration

// /new

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('../new-activity/new-activity.module').then(
        (m) => m.NewActivityModule
      ),
  },
  {
    path: ':slug',
    loadChildren: () =>
      import('../detail-activity/detail-activity.module').then(
        (m) => m.DetailActivityModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
