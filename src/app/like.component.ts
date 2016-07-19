import {Component,Input} from '@angular/core';

@Component({
  selector: 'like',
  template:`
          <i class="glyphicon glyphicon-heart"
            [class.hilighted]="!isLike" (click)="onClick();">
          </i>
          Number of Likes: {{numberOfLikes}}
          `,
  styles:[`
        .glyphicon{
          font-size: 40px;
          course:pointer;
        }
        .hilighted{
            color:red;
        }
    `]
})
export class LikeComponent{
  @Input() isLike = false;
  @Input() numberOfLikes=0;

  onClick(){
    this.isLike=!this.isLike;
    this.isLike== true ?this.numberOfLikes++:this.numberOfLikes--;
  }
}
