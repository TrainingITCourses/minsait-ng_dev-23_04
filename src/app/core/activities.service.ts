import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACTIVITIES } from '../data/activities.data';
import { Activity } from '../data/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private list: Activity[] = ACTIVITIES;

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Activity[]> {
    // return this.list;
    return this.http.get<Activity[]>('http://localhost:3000/activities');
  }

  getById(id: string): Activity | undefined {
    return this.list.find((a) => a.id === id);
  }

  getBySlug$(slug: string): Observable<Activity[]> {
    // return this.list.filter((a) => a.slug === slug);
    return this.http.get<Activity[]>(
      'http://localhost:3000/activities?slug=' + slug
    );
  }

  add$(activity: Activity): Observable<Activity> {
    // this.list.push(activity);
    console.log('llamando....');
    return this.http.post<Activity>(
      'http://localhost:3000/activities',
      activity
    );
    //console.log('he llamado!');
  }
}
