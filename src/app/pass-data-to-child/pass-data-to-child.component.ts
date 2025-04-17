import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass-data-to-child',
  imports: [],
  templateUrl: './pass-data-to-child.component.html',
  styleUrl: './pass-data-to-child.component.css'
})
export class PassDataToChildComponent {

  @Input() childName:string='';
  @Input() myCity:string='';
  @Input() frnd:string=''
  
}
