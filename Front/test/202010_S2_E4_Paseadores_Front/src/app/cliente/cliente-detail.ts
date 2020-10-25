import { Cliente } from './cliente';
import { PagoCliente } from '../pago-cliente/pago-cliente';
import { ContratoPaseo } from '../contrato-Paseo/contrato-paseo';
import { Perro } from '../perro/perro';
import { ContratoHotel } from '../contrato-hotel/contrato-hotel';

export class ClienteDetail extends Cliente{

    constructor(idA: number, nombreA: string, identificacionA: string, 
        correoA: string, telefonoA: string, imagenA: string, private pagosA: PagoCliente[], private contratosPaseoA: ContratoPaseo[],
        private perrosA: Perro[], private contratosHotelA: ContratoHotel[]){
            super(idA, nombreA, identificacionA, correoA, telefonoA, imagenA);
    }

    get pagos() : PagoCliente[] { return this.pagosA; }
    get contratosPaseo() : ContratoPaseo[] { return this.contratosPaseoA; }
    get perros() : Perro[] { return this.perrosA; }
    get contratosHotel() : ContratoHotel[] { return this.contratosHotelA; }
}