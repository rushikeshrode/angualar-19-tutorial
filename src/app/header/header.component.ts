import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BindingComponent } from '../binding/binding.component';
import { ControlflowComponent } from '../controlflow/controlflow.component';
import { CounterComponent } from '../counter/counter.component';
import { DirectivesComponent } from '../directives/directives.component';
import { DynamicstyleComponent } from '../dynamicstyle/dynamicstyle.component';
import { EffectComponent } from '../effect/effect.component';
import { EventComponent } from '../event/event.component';
import { ForloopComponent } from '../forloop/forloop.component';
import { SignalsComponent } from '../signals/signals.component';
import { ToDoComponent } from '../to-do/to-do.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  bindingUrl = "binding";
}
