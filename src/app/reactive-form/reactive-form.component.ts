import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // form control
  username = new FormControl();
  password = new FormControl();
  show = false; 
  show2 = false;  

  submitUserInfo(){
    this.show=true;
    console.log('username:', this.username.value, 'password:', this.password.value)
  }

  // form Group
  profileForm = new FormGroup({
    name:new FormControl(), father:new FormControl(), state:new FormControl()
  })
  
  submitProfileForm(){
    this.show2=true;
    console.log(this.profileForm.value);
  }

  setDefault(){
    this.profileForm.setValue({
      name: 'Rushikesh Rode',
      father: 'Prakash Rode',
      state: 'Maharastra'
    });
  }

  // form validation: 1st ars=default value, 2nd arg=Validators array
  customerForm = new FormGroup({
    customername :new FormControl('', [Validators.required, Validators.minLength(5)]),
    customermail : new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]), // if ur using /@start&@end, they work like quotes
    customerpassword : new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  customerInfo(){
    const cname = this.customerForm.value.customername;
    alert('Welcome '+ cname);
    console.log(this.customerForm.value);
  }

  // getter method for html. bcz it will be lengthy what we are returning.
  get custname() { return this.customerForm.get('customername') }
  get custemail() { return this.customerForm.get('customermail') }
  get custpassowrd() { return this.customerForm.get('customerpassword') }


}
