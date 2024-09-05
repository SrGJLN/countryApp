import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoadding: boolean = false;
  public initialValue: string = '';

  constructor ( private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCountry( term: string ): void{

    this.isLoadding = true;

    this.countriesService.searchCountry( term )
    .subscribe( countries => {
       this.countries = countries;
       this.isLoadding = false;
    });
  }
}