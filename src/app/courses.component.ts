import { Component } from '@angular/core';
import { CourseService } from './courses.service'

@Component({
  selector:'courses',
  template:`<h1>Courses</h1>
            <h2>{{courseTitle}}</h2>
            <ul>
            <li *ngFor='#course of courses'>
            {{ course }}
            </li>
            </ul>
            `,
  providers:[CourseService]
})
export class CoursesComponent{
    courseTitle='These course are good for us, we can learn and make money';
    courses;

    constructor(courseService : CourseService){
      this.courses = courseService.getCourses();
    }
}
