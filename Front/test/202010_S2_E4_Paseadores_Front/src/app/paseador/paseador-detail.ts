import { Paseador } from './paseador';
import { Horario } from '../horario/horario';
import { Psicologo } from '../paseo/paseo';
import { PagoPaseador } from '../pago-paseador/pago-paseador';

export class PaseadorDetail extends Paseador{    
    horariosDisponibles : Horario[];
    paseos : Psicologo[]; 
    pagos : PagoPaseador[];
}
