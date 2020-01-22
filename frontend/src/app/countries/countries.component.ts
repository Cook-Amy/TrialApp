import { ApiServiceService } from './../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any = [];

  constructor(private server: ApiServiceService) {
    this.server.getCountries().subscribe(data => {
      this.countries = data;
      // console.log("data: ");
      // console.log(this.countries);
    });
   }

  ngOnInit() {
  }

}
