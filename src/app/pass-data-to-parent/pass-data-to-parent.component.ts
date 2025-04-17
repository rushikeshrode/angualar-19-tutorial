import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pass-data-to-parent',
  imports: [],
  templateUrl: './pass-data-to-parent.component.html',
  styleUrl: './pass-data-to-parent.component.css'
})
export class PassDataToParentComponent {

  @Output() getStates = new EventEmitter<string[]>();
  states:string[] = ['UP', 'Bihar', 'JK', 'Panjab', 'Delhi']

  // method 1 using : ngOnInit
  ngOnInit(){
    this.getStates.emit(this.states);
  }

  // method 2 .. directy passing into btn (click)="getStates.emit(states)";
  // method 3 .. passing method that emits same as ngOnInit(): this.getStates.emit(this.states);
  sendDataToParent1(){
    this.getStates.emit(this.states);
  }

}
