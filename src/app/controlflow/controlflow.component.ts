import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {

  condition1:boolean=false;
  toggleBtn:boolean=false;
  displayDiv:number=2;

  toogle(){
    this.condition1=!this.condition1;
    console.log('condition 1 : ', this.condition1);
  }

  showDiv(){
    this.toggleBtn=!this.toggleBtn;
    console.log('Brown Block : ', this.toggleBtn);
  }

  displayColor(color:number){
    this.displayDiv = color;
    console.log('Selected Color : ', color);
  }

  colorNo(event:Event){
    this.displayDiv = parseInt((event.target as HTMLInputElement).value);
    console.log('Color no from input : ', this.displayDiv);
  }

  color:string="tomato";
  changeColor(val:string){
    this.color = val;
    console.log('switch case : ', this.color);
  }

  change(event:Event){
    this.color = (event.target as HTMLInputElement).value;
  }

}
