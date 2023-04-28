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
      'http://localhost:3000/actibities?slug=' + slug
    );
  }

  add(activity: Activity): void {
    this.list.push(activity);
  }
}
