import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] =['Iroman', 'Spiderman', 'Hulk', 'Thor', 'Capitan A'];
  heroesBorrados: string[] =[];

  borrarHeroe (){
    console.log('borrando...');
    this.heroesBorrados.push(this.heroes.shift()||'') ;
    console.log(this.heroesBorrados);
  }

}
