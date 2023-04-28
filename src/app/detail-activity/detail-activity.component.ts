import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ActivitiesService } from '../core/activities.service';
import { ACTIVITY_EMPTY, Activity } from '../data/activity.type';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css'],
})
export class DetailActivityComponent implements OnInit {
  activitySlug: string = 'activity-slug';
  // activity: any;
  activity$: Observable<any>;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService
  ) {
    this.activitySlug = this.route.snapshot.params['slug'];
    // const result: Activity[] = this.activitiesService.getBySlug(
    //   this.activitySlug
    // );
    // this.activity = result[0];
    // this.activitiesService
    //   .getBySlug$(this.activitySlug)
    //   .subscribe((result: Activity[]) => (this.activity = result[0]));
    this.activity$ = this.activitiesService.getBySlug$(this.activitySlug).pipe(
      map((result: Activity[]) => {
        return result[0];
      }),
      catchError((error) => {
        this.errorMessage = error.message;
        //throw error;
        const activityFake = ACTIVITY_EMPTY;
        return of(activityFake);
      })
    );
  }

  ngOnInit(): void {}
}
