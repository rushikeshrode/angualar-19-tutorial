import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*value*value;
  }

}
