import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  bgColor='black';

  counter:any = 0;

  toggle(actions: 'increment' | 'decrement' | 'reset') {  // actions is variable(user defined), 2: actions:string
    if (actions === 'reset') {
      this.bgColor="#ff9800";
      this.counter = 0;
    }
    else if (actions === 'increment') {
      this.bgColor="green";
      this.counter++;
    }
    else {
      this.bgColor="red";
      this.counter--;
    }
  }

}
