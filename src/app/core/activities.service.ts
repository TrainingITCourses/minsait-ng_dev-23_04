import { Injectable } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { Activity } from '../data/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private list: Activity[] = ACTIVITIES;

  constructor() {}

  getAll(): Activity[] {
    return this.list;
  }

  getById(id: string): Activity | undefined {
    return this.list.find((a) => a.id === id);
  }

  getBySlug(slug: string): Activity[] {
    return this.list.filter((a) => a.slug === slug);
  }

  add(activity: Activity): void {
    this.list.push(activity);
  }
}
