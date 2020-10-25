export class Paseador {

    constructor(private idA : number, private nombreA : string, private identificacionA: string,
                private correoA : string, private cuentaBancariaA : string, private telefonoA : string,
                private calificacionGlobalA : number, private arlA : string, private epsA : string, 
                private numeroCalificacionesA : number, private imagenA : string) {}

    get id() : number { return this.idA; }
    get nombre() : string { return this.nombreA; }
    get identificacion() : string { return this.identificacionA; }
    get correo() : string { return this.correoA; }
    get cuentaBancaria() : string { return this.cuentaBancariaA; }
    get telefono() : string { return this.telefonoA; }
    get calificacionGlobal() : number { return this.calificacionGlobalA; }
    get arl() : string { return this.arlA; }
    get eps() : string { return this.epsA; }
    get numeroCalificaciones() : number { return this.numeroCalificacionesA; }
    get imagen() : string { return this.imagenA; }

    set numeroCalificaciones(numero : number) {this.numeroCalificacionesA = numero;}
    set calificacionGlobal(calificacion : number) {this.calificacionGlobalA = calificacion}
    set imagen(img : string) {this.imagenA = img;}
}
