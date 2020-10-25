import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContratoHotelService } from '../contrato-hotel.service';
import { HoraHotel } from 'src/app/hora-hotel/hora-hotel';
import { ContratoHotel } from '../contrato-hotel';
import { ContratoHotelDetail } from '../contrato-hotel-detail';
import { ClienteDetail } from 'src/app/cliente/cliente-detail';
import { Perro } from 'src/app/perro/perro';
import { PagoCliente } from 'src/app/pago-cliente/pago-cliente';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-contrato-hotel-crear',
  templateUrl: './contrato-hotel-crear.component.html',
  styleUrls: ['./contrato-hotel-crear.component.css', '../../paseadores.css']
})
export class ContratoHotelCrearComponent implements OnInit {

  contratoHotelFormulario: FormGroup;
  contratoHotelFormularioCliente: FormGroup;
  clienteA : ClienteDetail;
  mediosPago: String[];
  horasHotel: Array<HoraHotel>;
  clientes: Array<ClienteDetail>;
  perros: Array<Perro>;
  pagosCliente: Array<PagoCliente>;
  horasHotelS: HoraHotel[];
  horaHotelV: HoraHotel;
  perrosC: Array<Perro>;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private contratoHotelService : ContratoHotelService) { }

  ngOnInit() {
    this.contratoHotelFormulario = this.formBuilder.group({
      cuidadoEspecial: ["", ],
      nombreCliente: ["", [Validators.required ]],
      idCliente : ["", Validators.required],
      nombrePerro: ["", Validators.required ],
      idPerro : ["", Validators.required],
      medioPago:["", [Validators.required]]
    });
    this.contratoHotelFormularioCliente = this.formBuilder.group({
      cuidadoEspecial: ["", ],
      nombrePerro: ["", Validators.required ],
      medioPago:["", [Validators.required]]
    });
    this.mediosPago = ['CREDITO','DEBITO','PSE'];
    this.contratoHotelService.getClientes().subscribe(clientes => {this.clientes = clientes;});
    this.contratoHotelService.getPerros().subscribe(perros => {this.perros = perros;});
    this.contratoHotelService.getHorasHotel().subscribe(horashotel => {this.horasHotel = horashotel; this.addEvents(horashotel);});
    this.horasHotelS = [];
    this.contratoHotelService.getPagosCliente().subscribe(pagos => {this.pagosCliente = pagos;});

    if(localStorage.getItem('role')=='Cliente'){
      this.contratoHotelService.getCliente().subscribe(cliente => {
        this.clienteA = cliente;
        this.perrosC=this.clienteA.perros;
      })
    }
    
  }


  crearContratoHotel(nuevoContratoHotel : ContratoHotelDetail,nuevoPagoCliente: PagoCliente) {
    // Process checkout data here
    let cuidadoEspecial : String = this.contratoHotelFormulario.value.cuidadoEspecial;
    let nombreCliente : String = this.contratoHotelFormulario.value.nombreCliente;
    let idCliente : String = this.contratoHotelFormulario.value.idCliente;
    let nombrePerro : String = this.contratoHotelFormulario.value.nombrePerro;
    let idPerro : number = this.contratoHotelFormulario.value.idPerro;
    let medioPago : String;
    console.log(nuevoPagoCliente)
    if (this.contratoHotelFormulario.value.medioPago == this.mediosPago[0])
    {
      medioPago = 'CREDITO';
    }
    else if(this.contratoHotelFormulario.value.medioPago == this.mediosPago[1])
    {
      medioPago = 'DEBITO';
    }
    else if(this.contratoHotelFormulario.value.medioPago == this.mediosPago[2])
    {
      medioPago = 'PSE';
    }

    


    if(this.horasHotelS.length>0){
      let h = this.horasHotelS.slice();

    nuevoContratoHotel.cuidadoEspecial = cuidadoEspecial;
    
    nuevoContratoHotel.horasHotel = this.horasHotelS.slice();
    let costoTotal = 0;
    this.horasHotelS.forEach(horaHotel =>{
      costoTotal += horaHotel.costoBase;
    })

    nuevoContratoHotel.costo = costoTotal;

    this.clientes.forEach(cliente2 => {
      if(cliente2.nombre == nombreCliente && cliente2.identificacion == idCliente)
      {
        nuevoContratoHotel.cliente = cliente2;
        nuevoPagoCliente.cliente = cliente2;
      }
    })
  

    this.perros.forEach(perro2 => {
        if(perro2.nombre == nombrePerro && perro2.idPerro == idPerro)
        {
          nuevoContratoHotel.perro = perro2;
        }
    })

    nuevoPagoCliente.monto = costoTotal;
    let numRef = this.pagosCliente.length+1;
    nuevoPagoCliente.referencia = 'referencia'+ numRef;
    nuevoPagoCliente.medioPago=medioPago;
    
    console.log(nuevoPagoCliente)
    console.log(nuevoContratoHotel)
  
    
    this.contratoHotelService.crearPagoCliente(nuevoPagoCliente).subscribe(pagoClienteN =>{
      this.showSuccessP();
      
      console.log(h);
      
      nuevoContratoHotel.pagoCliente = pagoClienteN;
      this.toastr.success('ContratoHotel creado exitosamente!', nuevoContratoHotel.cliente.nombre, { "progressBar": true, timeOut: 4000 });
      this.contratoHotelService.crearContratoHotel(nuevoContratoHotel).subscribe(contratoHotel => {
        console.log(h)
        h.forEach(horahotel =>{
        this.contratoHotelService.addHoraHotel(contratoHotel.id,horahotel.id,horahotel).subscribe(contrato =>
        {
          console.log(contrato);
        });
     
      })
      this.showSuccess();
    }); 
    });

 
  
    }
    else{
      this.toastr.error('No se seleccionaron las horas hotel','', { "progressBar": true, timeOut: 4000 });
    }
    this.contratoHotelFormulario.reset();
    this.horasHotelS = []
  }

  crearContratoHotelCliente(nuevoContratoHotel : ContratoHotelDetail,nuevoPagoCliente: PagoCliente) {
    // Process checkout data here
    let cuidadoEspecial : String = this.contratoHotelFormularioCliente.value.cuidadoEspecial;
    let nombrePerro : String = this.contratoHotelFormularioCliente.value.nombrePerro;
    let medioPago : String;
    console.log(nuevoPagoCliente)
    if (this.contratoHotelFormularioCliente.value.medioPago == this.mediosPago[0])
    {
      medioPago = 'CREDITO';
    }
    else if(this.contratoHotelFormularioCliente.value.medioPago == this.mediosPago[1])
    {
      medioPago = 'DEBITO';
    }
    else if(this.contratoHotelFormularioCliente.value.medioPago == this.mediosPago[2])
    {
      medioPago = 'PSE';
    }

    


    if(this.horasHotelS.length>0){
    
    let h = this.horasHotelS.slice();

    nuevoContratoHotel.cuidadoEspecial = cuidadoEspecial;
    
    nuevoContratoHotel.horasHotel = this.horasHotelS.slice();
    let costoTotal = 0;
    this.horasHotelS.forEach(horaHotel =>{
      costoTotal += horaHotel.costoBase;
    })

    nuevoContratoHotel.costo = costoTotal;

    nuevoPagoCliente.monto = costoTotal;
    let numRef = this.pagosCliente.length+1;
    nuevoPagoCliente.referencia = 'referencia'+ numRef;
    nuevoPagoCliente.medioPago = medioPago;

    nuevoContratoHotel.cliente = this.clienteA;
    nuevoPagoCliente.cliente = this.clienteA;
    this.clienteA.perros.forEach(perro2 => {
      if(perro2.nombre == nombrePerro)
      {
        nuevoContratoHotel.perro = perro2;
      }
    })

      console.log(nuevoPagoCliente)
      console.log(nuevoContratoHotel)

      this.contratoHotelService.crearPagoCliente(nuevoPagoCliente).subscribe(pagoClienteN =>{
        this.showSuccessP();
        
        console.log(h);
        
        nuevoContratoHotel.pagoCliente = pagoClienteN;
        this.toastr.success('ContratoHotel creado exitosamente!', nuevoContratoHotel.cliente.nombre, { "progressBar": true, timeOut: 4000 });
        this.contratoHotelService.crearContratoHotel(nuevoContratoHotel).subscribe(contratoHotel => {
          console.log(h)
          h.forEach(horahotel =>{
          this.contratoHotelService.addHoraHotel(contratoHotel.id,horahotel.id,horahotel).subscribe(contrato =>
          {
            console.log(contrato);
          });
       
        })
        this.showSuccess();
        }); 
        });
  
    }
    else{
      this.toastr.error('No se seleccionaron las horas hotel','', { "progressBar": true, timeOut: 4000 });
    }
    this.contratoHotelFormulario.reset();
    this.horasHotelS = []
  }

  showSuccess() {
    this.toastr.success('Contrato Hotel creado exitosamente!', '', { "progressBar": true, timeOut: 4000 });
  }
  showSuccessP() {
    this.toastr.success('Pago Cliente asociado al contratoHotel creado exitosamente!', '', { "progressBar": true, timeOut: 4000 });
  }

  cancelarCreacion() {
    this.contratoHotelFormulario.reset();
    this.contratoHotelFormularioCliente.reset();
    this.horasHotelS = [];
  }

  addHoraHotel(horaHotelS : HoraHotel)
  {
    let existe = false;
    this.horasHotelS.find(horaHotel => {
      if(horaHotel.id== horaHotelS.id){
        existe = true;
      }
    });
    if(!existe){
      this.horasHotelS.push(horaHotelS);
    }
  }

  eliminarHoraHotel(horaHotelE : HoraHotel)
  {
    let pos = this.horasHotelS.indexOf(horaHotelE);
    this.horasHotelS.splice(pos,1);
  }

  estaAdd(horaHotelC: HoraHotel): boolean{
    let rta = false;
    this.horasHotelS.forEach(h => {
      if(h.id === horaHotelC.id)
      {
        rta = true;
      }
    })
    return rta;
  }


  strToDate(publishingdate: string): String {
    const dateTime: string[] = publishingdate.split('T');
    const date: string = dateTime[0];
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return date ;
  }

  strToTime(publishingdate: string): String {
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  timeHM[0] + ':'+ timeHM[1];
  }


  calendarPlugins = [dayGridPlugin];
  calendarEvents = [{}];
  color = '#fd7e14';
  addEvents(horasHotel: HoraHotel[]){
    horasHotel.forEach(h => {
      let d = h.dia.split('T')[0];
      this.calendarEvents = this.calendarEvents.concat({title: 'Hotel', date:d, id: h.id});
    })
    console.log(this.calendarEvents);
  }

  handleDateClick(arg) { // handler method
    console.log(arg);
    console.log(arg.event.start);
    let f = arg.event.start;
    let id = arg.event.id;
    console.log(new Date(f));
    console.log(id);
    this.contratoHotelService.getHoraHotel(id).subscribe( hora => {
      this.horaHotelV = hora;
    })
  }

  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  esCliente(): boolean{
    return localStorage.getItem('role') == 'Cliente';
  }
}
