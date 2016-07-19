import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { BooksComponent } from './books.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {SummaryPipe} from './summary.pipe';
import {ContactForm} from './contact-form.component';



@Component({
  moduleId: module.id,
  selector: 'angualar-startup-app',
  template: `
            <contact-form></contact-form>
  `,
///  templateUrl: 'angualar-startup.component.html',

  // template:
  //           `
  //           {{post.title}}
  //           <br>
  //           {{post.desc |summary}}
  //           `,
  // pipes : [SummaryPipe],
  styleUrls: ['angualar-startup.component.css'],
  directives:[CoursesComponent,AuthorComponent,BooksComponent,FavoriteComponent,LikeComponent,VoteComponent,ContactForm]
})
export class AngualarStartupAppComponent {
  title = 'angular-startup works!';
  flag = false;

  post = {
    title:'title',
    isFavourite:true,
    desc:'hello this is an example from pipes . This is a custome pipe the i am creating.'
  }

  tweets = {
    isLike:true,
    numberOfLikes:20
  }

  changeValue($event){
    this.title = $event.target.value;
  }

  clear(){
    this.title='';
  }
  onChangeFav($event){
    console.log($event);

  }

}
