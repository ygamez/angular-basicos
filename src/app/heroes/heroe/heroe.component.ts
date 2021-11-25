import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    name: string = 'Ironman';
    age: number = 45;

    
    public get nameCapitalizado() : string {
        return this.name.toUpperCase();
    }
    

    obtenerNombre():string{

        return `${this.name} - ${this.age} `;

    }

    cambiarName():string{
        return this.name = 'Spiderman';
    }
    cambiarAge():number{
        console.log('hey...');
        return this.age = 33;
    }


}