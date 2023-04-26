import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../core/activities.service';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css'],
})
export class DetailActivityComponent implements OnInit {
  activitySlug: string = 'activity-slug';
  activity: any;
  constructor(
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService
  ) {
    this.activitySlug = this.route.snapshot.params['slug'];
    const result = this.activitiesService.getBySlug(this.activitySlug);
    this.activity = result[0];
  }

  ngOnInit(): void {}
}
