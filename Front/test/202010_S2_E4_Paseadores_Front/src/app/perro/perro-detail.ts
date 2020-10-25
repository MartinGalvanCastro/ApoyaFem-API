import { Perro } from './perro';
import { ContratoHotel } from '../contrato-hotel/contrato-hotel';
import { ContratoPaseo } from '../contrato-paseo/contrato-paseo';


export class PerroDetail extends Perro{
  
   paseos: ContratoPaseo[];
   estadias : ContratoHotel[];
}


