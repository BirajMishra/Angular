import {Component} from '@angular/core';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    moduleId: module.id,
    selector: 'author',
    templateUrl: 'author.component.html',
    providers:[AuthorService],
    directives:[AutoGrowDirective]
})
export class AuthorComponent{
    authorTitle ="Below is the list of Authors.";
    authors;

    constructor(authorService : AuthorService ){
       this.authors = authorService.getAuthors();

    }
}
