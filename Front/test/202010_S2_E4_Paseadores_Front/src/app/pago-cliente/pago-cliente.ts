import { Cliente } from 'src/app/cliente/cliente';
import { ContratoHotel } from 'src/app/contrato-hotel/contrato-hotel';
import { ContratoPaseo } from 'src/app/contrato-Paseo/contrato-paseo';

export class PagoCliente{

    constructor(private idA: number, private referenciaA: String, private montoA: number, private medioPagoA: String, private clienteA: Cliente, private contratoHotelA: ContratoHotel, private contratoPaseoA: ContratoPaseo ){

    }

    get id(): number {return this.idA;}
    get referencia(): String {return this.referenciaA;}
    get monto(): number {return this.montoA;}
    get cliente(): Cliente {return this.clienteA;}
    get contratoHotel(): ContratoHotel {return this.contratoHotelA;}
    get contratoPaseo(): ContratoPaseo {return this.contratoPaseoA;}
    get medioPago(): String {return this.medioPagoA;}

    set referencia(refer:String){this.referenciaA = refer }
    set monto(costo:number){this.montoA = costo}
    set cliente(client : Cliente){this.clienteA = client}
    set contratoHotel(contrato: ContratoHotel){this.contratoHotel = contrato}
    set contratoPaseo(contrato: ContratoPaseo){this.contratoPaseo = contrato}
    set medioPago(medio: String){this.medioPago = medio}
    
}