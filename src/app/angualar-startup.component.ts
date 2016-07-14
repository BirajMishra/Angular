import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';

@Component({
  moduleId: module.id,
  selector: 'angualar-startup-app',
  templateUrl: 'angualar-startup.component.html',
  styleUrls: ['angualar-startup.component.css'],
  directives:[CoursesComponent]
})
export class AngualarStartupAppComponent {
  title = 'angualar-startup works!';
}
