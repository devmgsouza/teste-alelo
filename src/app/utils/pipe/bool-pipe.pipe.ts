import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolPipe'
})
export class BoolPipePipe implements PipeTransform {

  transform(value: boolean) {
    let retorno: string;
    if (value) {
        retorno = 'DONE';
    } else {
        retorno = 'WAITING';
    }
    return retorno;
  }
}
