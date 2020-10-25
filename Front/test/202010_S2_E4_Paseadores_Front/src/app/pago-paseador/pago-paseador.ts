import { Paseador } from '../paseador/paseador';

export class PagoPaseador {

    constructor(private idA : number, private fechaLimiteA : any, private montoA : number,
                private referenciaA : string, private paseadorA : Paseador) {}

    get id() : number { return this.idA; }
    get fechaLimite() : string { return this.fechaLimiteA; }
    get monto() : number { return this.montoA; }
    get referencia() : string { return this.referenciaA; }
    get paseador() : Paseador { return this.paseadorA; }
}
