import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoadding: boolean = false;
  public initialValue: string = '';

  constructor ( private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ): void{

    this.isLoadding = true;

    this.countriesService.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoadding = false;
     });
  }

}
