import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  imports: [RouterLink],
  templateUrl: './dynamic-route.component.html',
  styleUrl: './dynamic-route.component.css'
})
export class DynamicRouteComponent {

  users: any = [
    { id: 1, name: 'Aarav Mehta', age: 25, email: 'aarav.mehta@example.com', technology: 'Angular', city: 'Pune' },
    { id: 2, name: 'Sneha Patil', age: 28, email: 'sneha.patil@example.com', technology: 'React', city: 'Mumbai' },
    { id: 3, name: 'Rahul Verma', age: 30, email: 'rahul.verma@example.com', technology: 'Vue', city: 'Delhi' },
    { id: 4, name: 'Neha Sharma', age: 24, email: 'neha.sharma@example.com', technology: 'Node.js', city: 'Bangalore' },
    { id: 5, name: 'Karan Joshi', age: 27, email: 'karan.joshi@example.com', technology: 'Java', city: 'Hyderabad' },
    { id: 6, name: 'Priya Desai', age: 26, email: 'priya.desai@example.com', technology: 'Python', city: 'Ahmedabad' },
    { id: 7, name: 'Manav Singh', age: 29, email: 'manav.singh@example.com', technology: 'Go', city: 'Chennai' },
    { id: 8, name: 'Isha Kapoor', age: 23, email: 'isha.kapoor@example.com', technology: 'Flutter', city: 'Kolkata' }
  ];

}
