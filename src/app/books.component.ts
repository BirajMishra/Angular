import {Component} from '@angular/core';
import {BookServices} from './book.service';

@Component({
    selector: 'book',
    template: `<h1>Books</h1>
                {{title}}
                <ul>
                <li *ngFor='let book of books'>
                 {{book}}
                </li>
                </ul>
              `,
    providers:[BookServices]
})
export class BooksComponent{
     title: string= 'You may read the following books';
     books:string[];

     constructor(bookServices : BookServices){
        this.books= bookServices.getBooks();
     }
}
