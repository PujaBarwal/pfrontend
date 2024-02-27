import { Component } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  //template:`<h2>change</h2>`,
  styleUrl: './firstpage.component.css'
  //styles:`h2{color:red}`
})
export class FirstpageComponent {
  title= "This is my second page";
  user={
    name:"Puja",
    age:23,
    email:"puja@gmail.com"
  }

}
