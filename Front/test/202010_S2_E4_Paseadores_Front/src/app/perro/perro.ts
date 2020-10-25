import { Cliente } from '../Cliente/Cliente';

export class Perro {

    constructor(private idA :number,
                private edadA: number, 
                private idPerroA : number, 
                private nombreA:string,
                private razaA:string, 
                private propietarioA: Cliente,
                private imagenA: string ){}

    get id() : number {return this.idA; }
    get idPerro() : number {return this.idPerroA;}
    get nombre() : string { return this.nombreA; }
    get edad() : number {return this.edadA; }
    get raza() : string {return this.razaA;}
    get propietario() : Cliente {return this.propietarioA;}
    get imagen() : string {return this.imagenA;} 

    set idPerro(id: number){this.idA = id};
    set nombre(nom: string){this.nombreA = nom};
    set edad(eda: number){this.edadA = eda};
    set raza(raz: string){this.razaA = raz};
    set propietario(client: Cliente){this.propietarioA = client};
    set imagen(img: string){this.imagenA = img};

}