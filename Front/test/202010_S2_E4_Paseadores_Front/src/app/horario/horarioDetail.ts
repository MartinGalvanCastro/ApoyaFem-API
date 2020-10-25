import { Horario } from './horario';
import { Paseador } from '../paseador/paseador';
import { Paseo } from '../paseo/paseo';


export class HorarioDetail extends Horario {
    constructor(idA: number, duracionA: number, paseo2A: Paseo,
        ocupadoA: boolean, paseo1A: Paseo, diaA: any, private paseadoresA: Paseador[]) {
        super(idA, duracionA, paseo2A, ocupadoA, paseo1A, diaA)
    }
    get Paseadores(): Paseador[] { return this.paseadoresA; }
    set Paseadores(id: Paseador[]){this.paseadoresA = id};
}
