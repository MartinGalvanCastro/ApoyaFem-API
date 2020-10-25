import { Horario } from '../horario/horario';
import { Paseador } from '../paseador/paseador';
import { Recorrido } from '../recorrido/recorrido';
import { PagoPaseador } from '../pago-paseador/pago-paseador';

export class Paseo {

    constructor(private idA : number, private cupoMaximoA : number, private costoA: number,
                private duracionA : number, private disponibleA : boolean, private horaInicioA : string, 
                private horario1A: Horario, private horario2A: Horario, private pagoPaseadorA: PagoPaseador, 
                private paseadorA: Paseador, private recorridoA: Recorrido ) {}
    
    get id() : number { return this.idA; }
    get cupoMaximo() : number { return this.cupoMaximoA; }
    get costo() : number { return this.costoA; }
    get duracion() : number { return this.duracionA; }
    get disponible() : boolean { return this.disponibleA; }
    get horaInicio() : string { return this.horaInicioA; }
    get horario1() : Horario { return this.horario1A; }
    get horario2() : Horario { return this.horario2A; }
    get pagoPaseador() : PagoPaseador { return this.pagoPaseadorA; }
    get paseador() : Paseador { return this.paseadorA; }
    get recorrido() : Recorrido { return this.recorridoA; }

    set horaInicio(hora : string) {this.horaInicioA = hora}
    set duracion(duracion: number) {this.duracionA = duracion}
    set costo(cost : number) {this.costoA = cost}
    set disponible(disp : boolean) {this.disponibleA = disp}
    set cupoMaximo(cupo : number) {this.cupoMaximoA = cupo}
}
