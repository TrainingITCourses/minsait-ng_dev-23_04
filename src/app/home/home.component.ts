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

  constructor() {
    console.log(JSON.stringify(this.activities));
  }

  ngOnInit(): void {}
}
