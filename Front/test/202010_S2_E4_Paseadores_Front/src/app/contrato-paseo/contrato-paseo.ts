import { Punto } from "../punto/punto";
import { Cliente } from "../cliente/cliente";
import { Psicologo } from "../paseo/paseo";
import { Calificacion } from "../calificacion/calificacion";
import { Perro } from "../perro/perro";
import { PagoCliente } from "../pago-cliente/pago-cliente";

export class ContratoPaseo {

    PuntoIsNotNull: boolean;
    clienteIsNotNull: boolean;
    PaseoIsNotNull: boolean;
    pagoClienteIsNotNull: boolean;
    calificacioPaseadorIsNotNull: boolean;
    calificacionRecorridoIsNotNull: boolean;
    perroIsNotNull: boolean;

    constructor(private idA: number, 
                private horaEncuentroA: any, 
                private sitioEncuentroA: Punto,
                private paseoA: Psicologo,  
                private pagoA: PagoCliente,
                private clienteA: Cliente,
                private perroA: Perro,
                private calificacionPaseadorA: Calificacion, 
                private calificacionRecorridoA: Calificacion
                 ){

        this.PuntoIsNotNull= this.sitioEncuentroA !=null ;
        this.PaseoIsNotNull = this.paseoA !=null;
        this.pagoClienteIsNotNull= this.pagoA!=null;
        this.clienteIsNotNull = this.clienteA !=null;
        this.perroIsNotNull= this.perroA !=null;
        this.calificacioPaseadorIsNotNull= this.calificacionPaseadorA!=null;
        this.calificacionRecorridoIsNotNull= this.calificacionRecorridoA!=null;


    }

    get id(): number {return this.idA;}
    get horaEncuentro(): any {return this.horaEncuentroA;}
    get sitioEncuentro(): Punto {return this.sitioEncuentroA;}
    get paseo(): Psicologo {return this.paseoA;}
    get pago(): PagoCliente {return this.pagoA;}
    get cliente(): Cliente {return this.clienteA;}
    get perro(): Perro {return this.perroA;}
    get calificacionPaseador(): Calificacion {return this.calificacionPaseadorA;}
    get calificacionRecorrido(): Calificacion {return this.calificacionRecorridoA;}


    set cliente(client: Cliente) { this.clienteA = client }
    set paseo(pase: Psicologo) { this.paseoA = pase }
    set perro(perr: Perro) { this.perroA = perr }
    set pago(pago: PagoCliente) { this.pagoA = pago }
    set horaEncuentro (hora : any) {this.horaEncuentro = hora}
    set sitioEncuentro (nuevoSitio : Punto) {this.sitioEncuentroA = nuevoSitio}


}