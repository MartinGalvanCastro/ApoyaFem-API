import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../paseadores.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  roles : string[];

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private loginService: LoginService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correo: ["admin@administrador.com", [Validators.required, Validators.email]],
      identificacion: ["123456789", Validators.required],
      rol: ["Administrador", Validators.required]
    });
    this.roles = ["Cliente", "Paseador", "Administrador"];
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  login(usuario : Usuario): void {
    if (usuario.rol === 'Administrador') {
      this.loginService.setRolAdministrador();
      this.toastrService.success('Ingreso exitoso como administrador', '', { "progressBar": true, timeOut: 4000 });
      this.activeModal.close();
    } 
    else if (usuario.rol == 'Cliente') {
      this.loginService.validarCliente(usuario.correo).subscribe(cliente => {
        if(cliente.identificacion == usuario.identificacion)
        {
          this.loginService.setRolCliente(cliente.id.toString());
          this.toastrService.success('Ingreso exitoso del cliente ', cliente.nombre, { "progressBar": true, timeOut: 4000 });
          this.activeModal.close();
        }
        else
        {
          this.toastrService.error('El correo no corresponde con la identificación de algún cliente', '', { "progressBar": true, timeOut: 4000 });
        }
      });
    }
    else if (usuario.rol == 'Paseador'){
      this.loginService.validarPaseador(usuario.correo).subscribe(paseador => {
        if(paseador.identificacion == usuario.identificacion)
        {
          this.loginService.setRolPaseador(paseador.id.toString());
          this.toastrService.success('Ingreso exitoso del paseador ', paseador.nombre, { "progressBar": true, timeOut: 4000 });
          this.activeModal.close();
        }
        else
        {
          this.toastrService.error('El correo no corresponde con la identificación de algún paseador', '', { "progressBar": true, timeOut: 4000 });
        }
      });
    }
    else
    {
      this.loginService.setRolVisitante();
    }
  }
}
