import {Component, Input,Output} from '@angular/core';

@Component({
  selector: 'vote',
  template:`
            <div width="10px" style="font-size:20px;">
            <i class="glyphicon glyphicon-menu-up" (click)="onUpVote();" [class.glow]="isUpVote"> </i><br/>
            <span>{{numberOfVotes}}</span><br/>
            <i class="glyphicon glyphicon-menu-down" (click)="onDownVote();" [class.glow]="isDownVote"></i>
            </div>
           `,
  styles:[`
          .glow{
            color: orange;
          }
    `]
  })
export class VoteComponent{
  @Input() numberOfVotes = 10;
  isUpVote = false;
  isDownVote = false;
  upBlock = false;
  downBlock = false;

  onUpVote(){
    this.isUpVote = true;
        if(!this.upBlock){
          this.numberOfVotes++;
          this.upBlock = true;
          this.isDownVote = false;
          this.downBlock = false;
        }
  }

  onDownVote(){
    this.isDownVote = true;
    if(!this.downBlock){
      this.numberOfVotes--;
      this.downBlock = true;
      this.isUpVote = false;
      this.upBlock = false;
    }
  }
}
