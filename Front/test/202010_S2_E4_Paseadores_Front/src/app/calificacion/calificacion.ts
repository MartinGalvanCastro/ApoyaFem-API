import { ContratoPaseo } from '../contrato-Paseo/contrato-paseo';
import { ContratoHotel } from '../contrato-hotel/contrato-hotel';

export class Calificacion {
    constructor(private idA : number, private valoracionA : number, private comentarioA : string, 
        private contratoRecorridoA : ContratoPaseo, private contratoPaseadorA : ContratoPaseo, private contratoHotelA : ContratoHotel) {}

get id() : number { return this.idA; }
get valoracion() : number { return this.valoracionA; }
get comentario() : string { return this.comentarioA; }
get contratoRecorrido() : ContratoPaseo { return this.contratoRecorridoA; }
get contratoPaseador() : ContratoPaseo { return this.contratoPaseadorA; }
get contratoHotel() : ContratoHotel { return this.contratoHotelA; }

set contratoRecorrido(cont : ContratoPaseo) {this.contratoRecorridoA = cont;}
set contratoPaseador(cont : ContratoPaseo) {this.contratoPaseadorA= cont;}
}
