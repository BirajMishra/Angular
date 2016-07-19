import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'Favourite',
  template:`
            <i class='glyphicon'
            [ngClass]="{
                      'glyphicon-star':isFavourite,
                      'glyphicon-star-empty':!isFavourite
            }"
            (click)='onStarClick();'>
            </i>
            `
})
export class FavoriteComponent{
  @Input() isFavourite=false;

  @Output() change = new EventEmitter();

  onStarClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({'value':this.isFavourite});
  }
}
