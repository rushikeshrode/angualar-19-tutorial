import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  // using normal variables
  a = 20; b = 30; c = this.a + this.b;
  updateB(){
    this.b = 10;                              // now c must change to 30, but it wont
    console.log('updated c : ', this.c);
  }

  // using signal
  x = signal(50);
  y = signal(20);

  updateX(){
    this.x.set(this.x() + 1)                  // x will change
    console.log('updated x : ', this.x);
  }

  constructor(){                              // using contructor to check if program refreshes
    effect(()=>{
      // console.log('signal-b : ', this.b); // there is be no signal of b when change
      console.log('signal-x : ', this.x());  // there will be signal of x when change
    })
  }

  // signals with DataTypes
  num1 : WritableSignal<number> = signal(10);

  updateNum(){
    this.num1.set(this.num1() + 1);
  }

  num2 : WritableSignal<number | string> = signal(2000);
  sayMyName(){
    this.num2.set("Walter White: You are GotDamm right.");
    alert('say my name :)');
  }

  // computed signal
  me = signal(25);
  you = signal(25);
  meyou = computed(()=> this.me() + this.you())   // if u use signal, it wont be updated in view directly
  updateYou(){
    this.you.set(50);
    // this.meyou = computed(()=> 12)   // can be re-intialized but there is no set() method
  }

}
