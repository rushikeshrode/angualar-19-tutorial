import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CounterComponent } from "./counter/counter.component";
import { EventComponent } from './event/event.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SignalsComponent } from "./signals/signals.component";
import { EffectComponent } from "./effect/effect.component";
import { ToDoComponent } from './to-do/to-do.component';
import { DynamicstyleComponent } from "./dynamicstyle/dynamicstyle.component";
import { DirectivesComponent } from "./directives/directives.component";
import { HeaderComponent } from "./header/header.component";
import { PassDataToChildComponent } from "./pass-data-to-child/pass-data-to-child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // title:string = 'Angular-19';
  // view:string = "header";
  
  // update(content:string){
  //   this.view=content;
  //   console.log('Page view : ', this.view);
  // }
}
