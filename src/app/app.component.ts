import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //al ponerlo aca tengo acceso a esa propiedan en el html
  nombre    :string  = 'Capitan America';
  nombre2    :string = 'SeBaStIaN VaLlEjO'
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  personajes:string[]= ['Ironman','Spiderman','Thor','Loki','Groot']
  PI        :number  = Math.PI;
  porcentaje:number  = 0.234;
  salario   :number  = 1234.5;
  fecha     :Date    = new Date();
  activar   :boolean = true;

  idioma: string = 'es';
  video : string = 'https://www.youtube.com/embed/P6NNJq0FZN4';
  heroe = {

    nombre: 'Logan',
    clave: ' Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }

  //para usar async debo trabajar con algo asincrono
  //se crea una promesa
  //             le decimos que resuelve un string
  valorPromesa = new Promise<string> ((resolve) => {

    setTimeout(()=>{
      resolve('llego la data');
    },4500)

  })


}
