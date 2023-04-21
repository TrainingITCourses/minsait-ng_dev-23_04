import { Component, Input, OnInit } from '@angular/core';
import { ACTIVITY_EMPTY, Activity } from '../../data/activity.type';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent implements OnInit {
  @Input() public activity: Activity = ACTIVITY_EMPTY;

  constructor() {}

  ngOnInit(): void {}

  isCheap(): boolean {
    return this.activity.price < 100;
  }
}
