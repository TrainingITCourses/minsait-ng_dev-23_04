import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailActivityRoutingModule } from './detail-activity-routing.module';
import { DetailActivityComponent } from './detail-activity.component';


@NgModule({
  declarations: [
    DetailActivityComponent
  ],
  imports: [
    CommonModule,
    DetailActivityRoutingModule
  ]
})
export class DetailActivityModule { }
