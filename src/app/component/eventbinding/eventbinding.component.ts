import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

  n1=4;
  n2=5;
  sum=0;

  show(){
    this.sum=this.n1+this.n2;
  }

  counter=0;
  incCounter()
  {
    this.counter++;
  }
  clearInterval()
  {
    this.counter=0;
  }

}
