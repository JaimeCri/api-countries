import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';

const routes: Routes = [
  {path: 'countries', component:ListCountriesComponent},
  {path: '', redirectTo:'countries', pathMatch:'full'} ,
  {path: 'detail/:id', component:DetailCountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
