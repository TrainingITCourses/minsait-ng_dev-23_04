import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

// /cumbre-vieja-exploration

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
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
