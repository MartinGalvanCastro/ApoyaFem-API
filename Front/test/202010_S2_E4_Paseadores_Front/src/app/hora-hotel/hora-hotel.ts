export class HoraHotel {
    constructor(private idA : number, private disponibleA : boolean, private cupoMaximoA : number,
        private costoBaseA : number, private diaA : String) {}

get id() : number { return this.idA; }
get disponible() : boolean { return this.disponibleA; }
get cupoMaximo() : number { return this.cupoMaximoA; }
get costoBase() : number { return this.costoBaseA; }
get dia() : String { return this.diaA; }
}
