import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

//va a recibir un argumenti booleano
  transform(value: string, mostrar:boolean = true):string {

    //si esta activado mostrar, asterisco.repetir de acuerdo al largo del string//caso contrario, entonces muestra el value
    return (mostrar) ? '*'.repeat(value.length): value;
  }

}
