import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  countries:Country[];
  page = 1;
  pageTotal = 250;
  pageSize = 15;

  constructor(private service:CountryServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getCountries();
    this.reloadList();
  }

  /*****************************************************************************
   * METODO PARA OBTENER EL LISTADO DE PAÍSES Y ALMACENARLO EN UN LOCALSTORAGE 
   *****************************************************************************/
  private getCountries(){
    this.service.getCountries().subscribe(dato => {
      this.countries = dato;
      localStorage.setItem('list', JSON.stringify(dato));
      this.reloadList();
    });
  }

  /********************************************************************
   * METODO PARA RECARGAR EL LISTADO CON LA INFORMACIÓN DE LOS PAÍSES 
   *******************************************************************/
  reloadList(){
    this.countries = JSON.parse(localStorage.getItem('list'))
    .map((pais, i) => ({id: i + 1, ...pais})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  /**************************************************************************************
   * METODO PARA MOSTRAR LA PANTALLA CON LA INFORMACIÓN A DETALLE DEL PAÍS SELECCIONADO
   * @param vcCountry 
   *************************************************************************************/
  detailCountry(vcCountry:string){
    this.router.navigate(['/detail', vcCountry]);
  }

}
