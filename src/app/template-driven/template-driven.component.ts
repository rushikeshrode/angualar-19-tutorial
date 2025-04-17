import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule,NgIf],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  details:any;
  addUser(val:NgForm){
    this.details = val;
    console.log(val);
  }

  userDeatail:any
  getUser(val:NgForm){
    this.userDeatail=val
    console.log(val)
  }

}
