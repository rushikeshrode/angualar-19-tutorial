import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  name:string='';
  transform(value: string, ...args: unknown[]): unknown {
    this.name = value.split('').reverse().join('');
    return this.name;
  }

}
