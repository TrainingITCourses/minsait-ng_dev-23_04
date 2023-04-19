import { Component, Input, OnInit } from '@angular/core';
import { ACTIVITY_EMPTY, Activity } from '../../data/activity.type';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: Activity = ACTIVITY_EMPTY;

  constructor() {}

  ngOnInit(): void {}
}
