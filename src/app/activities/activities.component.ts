import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: any[] = [];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.activities = this.activitiesService.getAll();
  }
}
