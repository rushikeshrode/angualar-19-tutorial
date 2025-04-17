import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTo'
})
export class PowerToPipe implements PipeTransform {

  transform(value: number, power?:number): number {

    const userinput = power !== undefined ? power : 2;
    return Math.pow(value, userinput);

  }

}
