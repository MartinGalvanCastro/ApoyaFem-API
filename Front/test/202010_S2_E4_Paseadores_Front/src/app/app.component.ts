import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteRegistrarComponent } from './cliente/cliente-registrar/cliente-registrar.component';
import { LoginComponent } from './login/login/login.component';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './paseadores.css']
})
export class AppComponent {
  title = 'front';

  constructor(private modalService: NgbModal, private router: Router, 
    private loginService: LoginService,
    private toastrService: ToastrService){}

  
  openModal() {
    const modalRef = this.modalService.open(ClienteRegistrarComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
 
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  abrirLogIn() {
    const modalRef = this.modalService.open(LoginComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
 
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  abrirPerfilCliente(){
    this.router.navigateByUrl('/clientes/' + localStorage.getItem('id'));
  }

  esCliente(): boolean{
    return localStorage.getItem('role') == 'Cliente';
  }

  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  esPaseador(): boolean{
    return localStorage.getItem('role') == 'Paseador';
  }

  cerrarSesion(): void{
    this.loginService.setRolVisitante();
    this.toastrService.success('Cerró sesión de forma exitosa ', 'Vuelva pronto', { "progressBar": true, timeOut: 4000 });
  }

}
