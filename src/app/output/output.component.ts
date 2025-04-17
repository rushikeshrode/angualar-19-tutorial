import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassDataToChildComponent } from "../pass-data-to-child/pass-data-to-child.component";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { PassDataToParentComponent } from '../pass-data-to-parent/pass-data-to-parent.component';

@Component({
  selector: 'app-output',
  imports: [PassDataToParentComponent,PassDataToChildComponent, FormsModule, NgFor],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  username:string|null = "";
  useremail="";
  city="";

  // for dynamic route: id,name
  id:string='';
  name:string='';

  // for Parent(this)-Child data trasfer
  myCity:string='';
  friends=['Sanam', 'Yash','Sankalp']

  // for Child-Parent(this) data transfer
  myStates:string[] =[]
  selectedState='';
  handleStates(states:string[]){
    this.myStates = states;
    console.log(states);
  }

  constructor(private route:ActivatedRoute){}

  ngOnInit(){

    // for method 1: directly sending from routes
    this.username = this.route.snapshot.paramMap.get('name');

    // for method 2: using method to send queryParams
    this.route.queryParams.subscribe(data=>{
      this.useremail = data['mail']
    })

    // for method 3: getting from app.routes.ts
    this.route.data.subscribe(data=>{
      this.city = data['city'];
    })

    // // for login method (used method 2)
    // this.route.queryParams.subscribe(param=>{
    //   this.username = param['name'];
    //   this.useremail = param['email'];
    //   console.log('login : ', this.useremail, ' :: ', this.username);
    // })

    // from dynamic route
    this.route.params.subscribe(param=>{
      console.log(param);
      this.id = param['id']
      this.name = param['name']
    })

    
  }

}
