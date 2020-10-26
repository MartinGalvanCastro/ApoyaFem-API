import { Paseo } from '../paseo/paseo';

export class Horario {


    constructor(private idA : number, private duracionA: number, private paseo2A: Paseo,
         private ocupadoA: boolean, private paseo1A: Paseo, private diaA: any) {}
    
    get id() : number { return this.idA; }
    get duracion() : number { return this.duracionA; }
    get paseo2(): Paseo { return this.paseo2A; }
    get ocupado() : boolean { return this.ocupadoA; }
    get paseo1(): Paseo { return this.paseo1A; }
    get dia() : any { return this.diaA; }

    
    set dia(value: any) {this.diaA = value;}

    set ocupado(value: boolean) {this.ocupadoA = value;}

    set duracion(value: number) {this.duracionA = value;}

    
}
