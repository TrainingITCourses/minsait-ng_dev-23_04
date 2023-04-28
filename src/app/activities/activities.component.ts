import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  errorMessage: string = '';
  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    // this.activities = this.activitiesService.getAll();
    this.activitiesService.getAll$().subscribe(
      (activities: Activity[]) => (this.activities = activities),
      (error) => {
        this.errorMessage = error.message;
        this.activities = [];
      }
    );
    // this.activitiesService.getAll$().subscribe({
    //   next: (activities: Activity[]) => (this.activities = activities),
    //   error: (error) => {
    //     this.errorMessage = error.message;
    //     this.activities = [];
    //   },
    // });
  }
}

// function doble(x: number) {
//   return x * 2;
// }
// const doble = (x: number) => {
//   return x * 2;
// };
const doble = (x: number) => x * 2;
doble(2);

//  esPrimo(2) => true
// function esPrimo(x: number): boolean {
//   for (let i = 2; i < x; i++) {
//     if (x % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
const esPrimo = (x: number): boolean => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

esPrimo(2); // true
esPrimo(3); // true
esPrimo(4); // false

// function imprimir(x: number, y: string): void {
//   console.log(x, y);
// }
// const imprimir = (x: number, y: string): void => {
//   console.log(x, y);
// }
const imprimir = (x: number, y: string): void => console.log(x, y);
imprimir(2, 'hola');
