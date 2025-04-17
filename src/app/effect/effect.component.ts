import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {

  count = signal(0);
  display = false;

  add(){
    this.count.set(this.count()+1);
  }

  constructor(){
    effect(()=>{
      console.log(this.count());
      if(this.count() % 5 == 0){
        this.display = true;
        setTimeout(() => {
          this.display = false;
        }, 2000);
      }
    })
  }

 

}
