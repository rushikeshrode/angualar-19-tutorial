import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { EventComponent } from './event/event.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { DirectivesComponent } from './directives/directives.component';
import { DynamicstyleComponent } from './dynamicstyle/dynamicstyle.component';
import { EffectComponent } from './effect/effect.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SignalsComponent } from './signals/signals.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { OutputComponent } from './output/output.component';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { PassDataToChildComponent } from './pass-data-to-child/pass-data-to-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { PassDataToParentComponent } from './pass-data-to-parent/pass-data-to-parent.component';
import { ServicesOutputComponent } from './services-output/services-output.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'eventbinding', component: EventComponent },
  { path: 'ifelse', component: ControlflowComponent },
  { path: 'loops', component: ForloopComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'effect', component: EffectComponent },
  { path: 'toDoApp', component: ToDoComponent },
  { path: 'dynamicStyle', component: DynamicstyleComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'output', component: OutputComponent , data:{city:'Pune, Maharastra'}},   // data sharing
  { path: 'dynamicRoute', component: DynamicRouteComponent },                       // dynamic route
  { path: 'dynamicRoute/output/:id', component: OutputComponent },                  // dynamic route
  { path: 'dynamicRoute/output/:id/:name', component: OutputComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenComponent },
  { path: 'send-to-child', component: PassDataToChildComponent },
  { path: 'send-to-parent', component: PassDataToParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesOutputComponent },

  


  // wildcart pattern: matches all urls
  { path:'**', component:ErrorpageComponent}
];