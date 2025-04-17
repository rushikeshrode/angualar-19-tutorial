import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {

  users = ['Rushikesh', 'Kapil', 'Shyam', 'Mahesh', 'Sanket', 'Raqib', 'Saloni'];
  empty = [];     // to test @empty

  students:any = [
    { name: 'Aarav Mehta', age: 25, email: 'aarav.mehta@example.com', technology: 'Angular', city: 'Pune' },
    { name: 'Sneha Patil', age: 28, email: 'sneha.patil@example.com', technology: 'React', city: 'Mumbai' },
    { name: 'Rahul Verma', age: 30, email: 'rahul.verma@example.com', technology: 'Vue', city: 'Delhi' },
    { name: 'Neha Sharma', age: 24, email: 'neha.sharma@example.com', technology: 'Node.js', city: 'Bangalore' },
    { name: 'Karan Joshi', age: 27, email: 'karan.joshi@example.com', technology: 'Java', city: 'Hyderabad' },
    { name: 'Priya Desai', age: 26, email: 'priya.desai@example.com', technology: 'Python', city: 'Ahmedabad' },
    { name: 'Manav Singh', age: 29, email: 'manav.singh@example.com', technology: 'Go', city: 'Chennai' },
    { name: 'Isha Kapoor', age: 23, email: 'isha.kapoor@example.com', technology: 'Flutter', city: 'Kolkata' }
  ];
  
  stdCity:string = "";
  stdName:string = "";
  studentCity(studentname:string, studentcity:string){
    this.stdCity = studentcity;
    this.stdName = studentname;
    console.log(this.stdName, ' : ', this.stdCity);
  }
  

}
