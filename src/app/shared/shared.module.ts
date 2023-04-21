import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { ListHeaderComponent } from './list-header/list-header.component';

@NgModule({
  declarations: [ActivityItemComponent, ListHeaderComponent],
  imports: [CommonModule],
  exports: [ActivityItemComponent, ListHeaderComponent],
})
export class SharedModule {}
