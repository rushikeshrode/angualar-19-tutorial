import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username="";

  // using for method 2
  useremail="";
  constructor(private router:Router){}

  // this method can also hold arg but in this case ngModel connects it directly.So no need for arg passing
  submitEmail(){
    this.router.navigate(['output'], {queryParams:{mail:this.useremail}});
  }

  // for login btn
  login(){
    this.router.navigate(['output'], {queryParams:{name:this.username, email:this.useremail}});
  }
  
}
