import { Horario } from '../horario/horario';
import { Paseador } from '../paseador/paseador';
import { Recorrido } from '../recorrido/recorrido';
import { PagoPaseador } from '../pago-paseador/pago-paseador';

export class Paseo {

    constructor(private idA : number, private correoA : string, private nombreA : string, private ciudadUsuarioA : string, 
        private descripcionA : string, private fotoPerfilA : string ) {}
    
    get id() : number { return this.idA; }
    get correo() : string {return this.correoA;}
    get nombre() : string {return this.nombreA;}
    get ciudadUsuario() : string {return this.ciudadUsuarioA;}
    get descripcion() : string {return this.descripcionA;}
    get fotoPerfil() : string {return this.fotoPerfilA;}





    get cupoMaximo() : number { return null; }
    get costo() : number { return null; }
    get duracion() : number { return null; }
    get disponible() : boolean { return null; }
    get horaInicio() : string { return null; }
    get horario1() : Horario { return null; }
    get horario2() : Horario { return null; }
    get pagoPaseador() : PagoPaseador { return null; }
    get paseador() : Paseador { return null; }
    get recorrido() : Recorrido { return null; }

    set horaInicio(hora : string) {}
    set duracion(duracion: number) {}
    set costo(cost : number) {}
    set disponible(disp : boolean) {}
    set cupoMaximo(cupo : number) {}
}
