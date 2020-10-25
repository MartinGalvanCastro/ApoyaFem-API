import { Injectable } from '@angular/core';
import { NgxRolesService } from 'ngx-permissions'
import { PaseadorDetail } from '../paseador/paseador-detail';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClienteDetail } from '../cliente/cliente-detail';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private roleService: NgxRolesService, 
              private http: HttpClient,
              private router: Router) { }

  start(): void {
    this.roleService.flushRoles();
    const role = localStorage.getItem('role');
    if (!role) {
      this.setRolVisitante();
    } 
    else{
      const id = localStorage.getItem('id')
      if (role === 'Administrador') {
        this.setRolAdministrador();
      }
      else if (role === 'Paseador') {
        this.setRolPaseador(id);
      } 
      else 
      {
        this.setRolCliente(id);
      }
    }
  }

  setRolVisitante(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('Visitante', ['']);
    localStorage.setItem('role', 'Visitante');
  }

  setRolCliente(id : string): void {
    this.roleService.flushRoles();
    this.roleService.addRole('Cliente', ['']);
    localStorage.setItem('role', 'Cliente');
    localStorage.setItem('id', id);
    this.router.navigateByUrl('/clientes/' + id);
  }

  setRolPaseador(id : string): void {
    this.roleService.flushRoles();
    this.roleService.addRole('Paseador', ['']);
    localStorage.setItem('role', 'Paseador');
    localStorage.setItem('id', id);
    this.router.navigateByUrl('/paseadores/'+id);
  }

  setRolAdministrador(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('Administrador',['']);
    localStorage.setItem('role', 'Administrador');
  }

  printRole(): void {
    console.log(this.roleService.getRoles());
  }

  validarPaseador(correo : string) : Observable<PaseadorDetail> {
    return this.http.get<PaseadorDetail>(environment.baseUrl + "paseadores/correo/" + correo);
  }

  validarCliente(correo : string) : Observable<ClienteDetail> {
    return this.http.get<ClienteDetail>(environment.baseUrl + "clientes/correo/" + correo);
  }

  logout(): void {
    this.roleService.flushRoles();
    this.setRolVisitante();
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }
}
