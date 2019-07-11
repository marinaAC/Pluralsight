import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    let retorno;
    switch (value) {
      case 1:
        retorno = 'Half Hour';
        break;
      case 2:
        retorno = 'One Hour';
        break;
      case 3:
        retorno = 'Half Day';
        break;
      case 4:
        retorno = 'Full Day';
        break;
      default:
        retorno = value.toString();
        break;
    }
    return retorno;
  }
}
