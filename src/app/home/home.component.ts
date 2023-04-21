import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activities: Activity[] = ACTIVITIES;
  private sortOrder = 1;
  constructor() {
    console.log(JSON.stringify(this.activities));
  }

  ngOnInit(): void {}

  onSort() {
    console.log('order click');
    this.sortOrder = -this.sortOrder;
    this.activities = ACTIVITIES.sort(
      (a, b) => (a.price - b.price) * this.sortOrder
    );
  }
}
