import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../country';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {
  id:string;
  country: Country = new Country();
  constructor(private servicio:CountryServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getCountry();
  }

  /*************************************************************
   * METODO PARA OBTENER LA INFORMACIÓN DE UN PAÍS SELECCIONADO
   *************************************************************/
  private getCountry(){
    this.servicio.getCountry(this.id).subscribe(dato =>{
      this.country.name = dato[0]['name']['common'];
      this.country.capital = dato[0]['capital'];
      this.country.population = dato[0]['population'];
      this.country.area = dato[0]['area'];
      this.country.continents = dato[0]['continents'];
      this.country.flag = dato[0]['flags']['png'];
    });
  }

  /*****************************************************************
   * METODO PARA REDIRECCIONAR A LA PANTALLA DEL LISTADO DE PAÍSES
   ****************************************************************/
  redirectList(){
    this.router.navigate(['/countries']);
  }

}
