export class Cliente{
    constructor(private idA: number, private nombreA: string, private identificacionA: string, 
        private correoA: string, private telefonoA: string, private imagenA: string){}

    get id(): number {return this.idA;}
    get nombre(): string {return this.nombreA;}
    get identificacion(): string {return this.identificacionA;}
    get correo(): string {return this.correoA}
    get telefono(): string {return this.telefonoA;}
    get imagen(): string {return this.imagenA;}
}