import { Perro } from '../perro/perro';
import { Calificacion } from '../calificacion/calificacion';
import { Cliente } from '../cliente/cliente';
import { PagoCliente } from '../pago-cliente/pago-cliente';

export class ContratoHotel {
    constructor(private idA : number, private cuidadoEspecialA : String, private costoA : number,
        private clienteA : Cliente, private perroA : Perro, private calificacionA : Calificacion, 
        private pagoClienteA: PagoCliente ) {}

get id() : number { return this.idA; }
get cuidadoEspecial() : String { return this.cuidadoEspecialA; }
get costo() : number { return this.costoA; }
get cliente() : Cliente { return this.clienteA; }
get perro() : Perro { return this.perroA; }
get calificacion() : Calificacion {return this.calificacionA;}
get pagoCliente() : PagoCliente {return this.pagoClienteA;}

set cuidadoEspecial(cuidado:String){this.cuidadoEspecialA = cuidado }
set costo(cost: number) {this.costoA = cost}
set cliente(client: Cliente){this.clienteA = client}
set perro(perr : Perro){this.perroA = perr}
set pagoCliente(pago: PagoCliente){this.pagoClienteA = pago}



}
