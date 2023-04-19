import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../data/activity.type';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent implements OnInit {
  @Input() activity!: Activity;

  constructor() {}

  ngOnInit(): void {}
}
