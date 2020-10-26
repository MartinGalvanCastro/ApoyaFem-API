export class Recorrido {
    constructor(private idA : number, private correoA : string, private nombreA : string, private ciudadUsuarioA : string ) {}
    
    get id() : number { return this.idA; }
    get correo() : string {return this.correoA;}
    get nombre() : string {return this.nombreA;}
    get ciudadUsuario() : string {return this.ciudadUsuarioA;}

get calificacionGlobal() : number { return null; }
get numeroCalificaciones() : number { return null; }
}
