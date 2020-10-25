import { HoraHotel } from './hora-hotel';
import { ContratoHotel } from '../contrato-hotel/contrato-hotel';
export class HoraHotelDetail extends HoraHotel{
    contratosHotel: Array<ContratoHotel>;
}
