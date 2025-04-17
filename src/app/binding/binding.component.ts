import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  userName:string = 'Shyam Awachat';
  imgLink:string = 'https://3.bp.blogspot.com/-zQsCfGxt4b4/TjqR1YddTbI/AAAAAAAAA-Q/nKy4WgYyjvU/s1600/cool-wallpaper-27.jpg';

  sayHello(){
    console.log('Button Clicked ... ');
    alert('Hello ' + this.userName);
  }

  // two-way binding 
  email:string = '';
  name:string = '';
  city:string = '';
  getCity(event:Event){
    this.city = (event.target as HTMLInputElement).value;
    console.log(this.city);
  }
  getEmail(val:string){
    this.email = val;
    console.log(this.email);
  }

}
