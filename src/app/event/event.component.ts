import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  // 1 div
  handleEvent(event : Event){
    console.log('function called : ', event.type);
    console.log('event : ', event)
  }

  redBtn(event: Event){
    console.log('Red button clicked, type : ', event.type);
    console.log('event : ', (event.target as HTMLButtonElement).className);
  }

  greenBtn(event: Event){
    console.log('Green button clicked, type : ', event.type);
    console.log('event : ', (event.target as HTMLButtonElement).className);
  }

  address(event:Event){
    console.log('Address event type : ', event.type)
    console.log('Address : ', (event.target as HTMLInputElement).value)
  }

  focusEvent(event:Event){  // press enter onto element
    console.log('Event called : ', event.type)
  }

  blurEvent(event:Event){   // press enter out-of elemet
    console.log('Event called : ', event.type)
  }

  //  2 div two-way binding (2- methods)
  name = "";
  getName(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
    console.log(this.name);
  }
  setName(){
    this.name = "Rushikesh Rode";
  }

  usermail = "";
  submit(email:string){
    this.usermail = email;
  }
  setEmail(){
    this.usermail = "test123@gmail.com"
  }

}
