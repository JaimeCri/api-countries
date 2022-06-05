import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private httpCliente:HttpClient) { }

  private baseURL = "https://restcountries.com/v3.1/";

  /*******************************************************
   * SERVICIO PARA OBTENER EL LISTADO DE TODOS LOS PAÍSES
   * @returns 
   ******************************************************/
  getCountries():Observable<Country[]>{
    return this.httpCliente.get<Country[]>(`${this.baseURL}/all`);
  }

  /*****************************************************************
   * SERVICIO PARA OBTENER LA INFORMACIÓN DE UN PAÍS SELECCIONADO
   * @param vcCountry 
   * @returns 
   *****************************************************************/
  getCountry(vcCountry:string):Observable<Country>{
    return this.httpCliente.get<Country>(`${this.baseURL}/name/${vcCountry}`);
  }
}
