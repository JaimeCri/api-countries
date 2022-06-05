import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailCountryComponent } from './detail-country/detail-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCountriesComponent,
    DetailCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
