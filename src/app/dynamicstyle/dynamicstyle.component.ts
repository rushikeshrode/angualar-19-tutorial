import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicstyle',
  imports: [],
  templateUrl: './dynamicstyle.component.html',
  styleUrl: './dynamicstyle.component.css'
})
export class DynamicstyleComponent {

  size1 = "10px";
  size2 = "30px";
  size3 = "50px";
  zoom = true;
  bgColor="tomato";

  updateZoom(){
    this.zoom = !this.zoom;
  }


}
