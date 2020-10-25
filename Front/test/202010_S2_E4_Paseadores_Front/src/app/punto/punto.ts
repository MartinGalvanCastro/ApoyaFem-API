import { ContratoPaseo } from '../contrato-Paseo/contrato-paseo';
import { Recorrido } from '../recorrido/recorrido';

export class Punto {
    constructor(private idA : number, private longitudA : number, private latitudA : number, private posicionA : number,
        private contratoPaseoA : ContratoPaseo, private recorridoA : Recorrido) {}

get id() : number { return this.idA; }
get longitud() : number {return this.longitudA; }
get latitud() : number {return this.latitudA; }
get posicion() : number {return this.posicionA; }
get contratoPaseo() : ContratoPaseo {return this.contratoPaseoA; }
get recorrido() : Recorrido {return this.recorridoA; }

set recorrido (nuevoRecorrido : Recorrido) {this.recorridoA = nuevoRecorrido}
}
