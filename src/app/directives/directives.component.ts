import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  show = true;
  students = ['sham','rush', 'saloni', 'sanam', 'disha', 'yash', 'sanket'];
  colorBtn = ['red','yellow', 'green', 'grey', 'black', 'pink'];
  bgColor = "";

  updateColor(color:string){
    this.bgColor = color;
    console.log(this.bgColor);
  }

  toggle(){
    this.show = !this.show;
  }

}
