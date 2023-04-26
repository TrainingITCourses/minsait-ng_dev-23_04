import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NewActivityRoutingModule } from './new-activity-routing.module';
import { NewActivityComponent } from './new-activity.component';

@NgModule({
  declarations: [NewActivityComponent],
  imports: [CommonModule, NewActivityRoutingModule, ReactiveFormsModule],
})
export class NewActivityModule {}
