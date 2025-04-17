import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../customPipe/reverse.pipe';
import { CubePipe } from '../customPipe/cube.pipe';
import { PowerToPipe } from '../customPipe/power-to.pipe';

@Component({
  selector: 'app-pipes',
  imports: [DatePipe, DatePipe, JsonPipe, SlicePipe, PercentPipe, UpperCasePipe, LowerCasePipe, 
    TitleCasePipe, CurrencyPipe, ReversePipe, CubePipe, PowerToPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  user = { name: 'Rushikesh Rode', age: 22, city:'Pune, Maharashtra' };
  today = new Date()
}
