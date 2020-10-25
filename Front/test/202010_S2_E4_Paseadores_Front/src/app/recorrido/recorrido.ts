export class Recorrido {
    constructor(private idA : number, private calificacionGlobalA : number, private numeroCalificacionesA : number) {}

get id() : number { return this.idA; }
get calificacionGlobal() : number { return this.calificacionGlobalA; }
get numeroCalificaciones() : number { return this.numeroCalificacionesA; }
}
